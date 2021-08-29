<template>
  <div>
    <Modal @toggle="toggle">
      <template #header>
        <div class="join-type">
          {{ JoinInfo.type === 'online' ? '온라인 조인' : '오프라인 조인' }}
        </div>
      </template>
      <template #body>
        <div class="join-container">
          <div class="join-info">
            <div class="join-img">
              <img :src="JoinInfo.thumbnail" />
            </div>

            <div class="join-data">
              <div class="join-title">
                <span>{{ JoinInfo.title }}</span>
              </div>
              <div class="join-time">
                <span>{{ JoinInfo.date }} {{ JoinInfo.time }}</span>
              </div>
              <div class="join-body">
                <span>{{ JoinInfo.body }}</span>
              </div>
            </div>
          </div>
          <div class="join-member">
            <div class="join-member-title">참여인원</div>
            <div>
              <div
                v-for="member in JoinInfo.members"
                :key="`index${member.nickname}`"
                class="member-data"
              >
                <div class="memeber-profile">
                  <img :src="member.profile" />
                </div>
              </div>
            </div>
          </div>
          <div class="join-button">
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
.join-container {
  padding: 0 1rem;
}
.join-type {
  font-weight: bold;
}
.join-title {
  text-align: center;
  font-weight: bold;
}
.join-time {
  text-align: end;
  font-size: 0.8rem;
  font-weight: 0;
}
.join-body {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.join-img {
  text-align: center;
  margin-bottom: 2rem;
  img {
    object-fit: cover;
    box-shadow: 1px 1px 2px 2px gray;
  }
}
.join-member {
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgba(33, 33, 36, 0.07);
}
.memeber-profile {
  img {
    object-fit: cover;
    border-radius: 1rem;
    width: 50px;
    height: 50px;
  }
}
.join-member-title {
  font-weight: bold;
  padding-bottom: 1rem;
}
.join-button {
  display: flex;
  padding-top: 1rem;
  justify-content: space-around;
}
</style>
