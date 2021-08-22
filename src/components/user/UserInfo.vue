<template>
  <div>
    <Modal @toggle="toggle">
      <template #header>
        <div class="user-title">{{ user?.name }}</div>
      </template>
      <template #body>
        <div class="user-info">
          <div class="user-img">
            <img :src="user?.profile" />
          </div>

          <div class="user-data">
            <div>
              <div>이름:</div>
              <span>{{ user?.name }}</span>
            </div>
            <div>
              <div>닉네임:</div>
              <span>{{ user?.nickname }}</span>
            </div>
            <div>
              <div>성별:</div>
              <span>{{ gender }}</span>
            </div>
            <div>
              <div>나이:</div>
              <span>{{ age }}</span>
            </div>
            <div>
              <div>타수:</div>
              <span>{{ user?.hit }}</span>
            </div>
            <div class="follow-button">
              <button
                type="submit"
                class="btn btn-primary auth-button"
                @click="addFollow(user.id)"
              >
                팔로우 추가
              </button>
              <button type="submit" class="btn btn btn-danger">
                팔로우 취소
              </button>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue';
import { getAuthFromCookie } from '@/composable/cookies';
import { mwDetailUser, mwAddFollow } from '@/api/middleware/user';
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';

export default {
  components: {
    Modal,
  },
  props: {
    userId: String,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const user = ref();
    const age = ref();
    const gender = ref();

    const addFollow = async (id) => {
      await mwAddFollow(process.env.VUE_APP_SERVER_TYPE, {
        userid: getAuthFromCookie(),
        targetid: id,
      });
      emit('toggle');
    };

    const toggle = () => {
      emit('toggle');
    };

    onMounted(async () => {
      const res = await mwDetailUser(
        process.env.VUE_APP_SERVER_TYPE,
        props.userId
      );
      user.value = res;
      age.value = dayjs().year() - Number(user.value.birthday.slice(0, 4)) + 1;
      user.gender === 'man' ? (gender.value = '남') : (gender.value = '여');
    });

    return {
      toggle,
      user,
      age,
      gender,
      addFollow,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.user-info {
  display: flex;
  img {
    margin: auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 1px 1px 2px 2px gray;
    margin-bottom: 0.5rem;
  }
  h4 {
    padding-bottom: 1rem;
  }
}
.user-data {
  padding-left: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
    font-weight: bold;
    line-height: 1.5rem;
  }
}
.follow-button {
  position: relative;
  bottom: 0;
  margin-top: 2rem;
}
</style>
