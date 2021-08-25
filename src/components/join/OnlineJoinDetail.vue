<template>
  <div>
    <Modal @toggle="toggle">
      <template #header>
        <div>{{ JoinInfo.type }}</div>
      </template>
      <template #body>
        <div class="join-container">
          <div class="user-info">
            <div class="user-img">
              <img :src="JoinInfo.thumbnail" />
            </div>

            <div class="user-data">
              <div>
                <span>{{ JoinInfo.title }}</span>
              </div>
              <div>
                <span>{{ JoinInfo.date }} {{ JoinInfo.time }}</span>
              </div>
              <div>
                <span>{{ JoinInfo.body }}</span>
              </div>
            </div>
          </div>
          <div>
            <div>참여인원</div>
            <div
              v-for="member in JoinInfo.members"
              :key="`index${member.nickname}`"
            >
              <div>{{ member.nickname }}</div>
              <div>{{ member.gender === 'man' ? '남' : '여' }}</div>
              <div>{{ member.hit }}</div>
            </div>
          </div>
          <div class="follow-button">
            <button
              type="submit"
              class="btn btn-primary auth-button"
              @click="applyJoin(JoinInfo.roomNo, JoinInfo.hostid)"
            >
              조인 신청
            </button>
            <button type="submit" class="btn btn btn-danger">조인 취소</button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue';
import { mwDetailJoin } from '@/api/middleware/mainJoin';
import { onMounted, ref } from 'vue';
import { useJoin } from '@/composable/join';
import { getAuthFromCookie } from '@/composable/cookies';
import { mwApplyJoin } from '@/api/middleware/subJoin';
export default {
  components: { Modal },
  emits: ['toggle'],
  setup(props, { emit }) {
    const JoinInfo = ref({});
    const { target } = useJoin();
    const toggle = () => {
      emit('toggle');
    };

    const applyJoin = async (roomNo, hostid) => {
      const data = {
        type: 'online',
        hostid: hostid,
        roomNo: roomNo,
        userid: getAuthFromCookie(),
      };
      await mwApplyJoin(process.env.VUE_APP_SERVER_TYPE, data);
    };
    const getJoinData = async () => {
      JoinInfo.value = await mwDetailJoin(
        process.env.VUE_APP_SERVER_TYPE,
        target.value
      );
      console.log(JoinInfo.value);
    };
    onMounted(() => {
      getJoinData();
    });
    return {
      toggle,
      JoinInfo,
      applyJoin,
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
