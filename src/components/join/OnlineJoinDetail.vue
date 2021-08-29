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
                <div>
                  인원 {{ JoinInfo.members?.length }}/{{ JoinInfo.totalcount }}
                </div>
                <div v-if="JoinInfo.type === 'offline'">
                  장소: {{ JoinInfo.place }}
                </div>
              </div>
              <div class="join-body">
                <span>{{ JoinInfo.body }}</span>
              </div>
            </div>
          </div>
          <div class="join-member">
            <div class="join-member-title">참여인원</div>
            <div class="join-member-profile">
              <div
                v-for="member in JoinInfo.members"
                :key="`index${member.nickname}`"
                @mouseover="showUserInfo(member.id)"
              >
                <div class="memeber-profile">
                  <img :src="member.profile" />
                </div>
                <div class="user-info" v-if="showUser === member.id">
                  <div>닉네임: {{ member.nickname }}</div>
                  <div>타수: {{ member.hit }}</div>
                  <div>성별: {{ member.gender === 'man' ? '남' : '여' }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="join-button">
            <div v-if="myJoin">
              <button type="submit" class="btn btn btn-danger">
                조인 취소
              </button>
            </div>
            <div v-else>
              <button
                type="submit"
                class="btn btn-primary auth-button"
                @click="applyJoin(JoinInfo.roomNo, JoinInfo.hostid)"
              >
                조인 신청
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
import { mwDetailJoin } from '@/api/middleware/mainJoin';
import { onMounted, ref } from 'vue';
import { useJoin } from '@/composable/join';
import { getAuthFromCookie } from '@/composable/cookies';
import { mwApplyJoin } from '@/api/middleware/subJoin';
export default {
  components: { Modal },
  emits: ['toggle'],
  setup(props, { emit }) {
    const myJoin = ref(false);
    const JoinInfo = ref({});
    const { target } = useJoin();
    const showUser = ref('');
    const toggle = () => {
      emit('toggle');
    };

    const showUserInfo = (id) => {
      showUser.value = id;
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
      JoinInfo.value.members.forEach((user) => {
        if (user.id === getAuthFromCookie()) {
          myJoin.value = true;
        }
      });
    };
    onMounted(() => {
      getJoinData();
    });
    return {
      toggle,
      JoinInfo,
      applyJoin,
      myJoin,
      showUser,
      showUserInfo,
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
    width: 18rem;
    height: 16rem;
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
.join-member-profile {
  display: flex;
  gap: 1rem;
}
.user-info {
  position: absolute;
  border-radius: 1rem;
  padding: 0.3rem;
  border: 1px solid rgba(33, 33, 36, 0.07);
  background-color: white;
}
</style>
