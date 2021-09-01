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
                class="member-box"
                v-for="member in JoinInfo.members"
                :key="`index${member.nickname}`"
                @mouseover="showUserInfo(member.id, member.nickname)"
              >
                <div class="memeber-profile">
                  <img :src="member.profile" />
                  <div class="member-name">{{ member.nickname }}</div>
                </div>
                <div class="user-info" v-if="showUser === member.nickname">
                  <div>닉네임: {{ member.nickname }}</div>
                  <div>타수: {{ member.hit }}</div>
                  <div>
                    성별: {{ member.gender === 'man' || 'Male' ? '남' : '여' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="join-button">
            <div v-if="myJoin === 'host'">
              <button
                type="submit"
                class="btn btn btn-danger"
                @click="delJoin(JoinInfo.roomNo)"
              >
                조인 삭제
              </button>
            </div>
            <div v-else-if="myJoin === 'true'">
              <button
                type="submit"
                class="btn btn btn-danger"
                @click="calcelJoin(JoinInfo.roomNo)"
              >
                조인 취소
              </button>
            </div>
            <div v-else-if="myJoin === 'wait'">
              <button
                type="submit"
                class="btn btn-primary auth-button"
                disabled="true"
              >
                조인 대기 중입니다.
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
import { mwDetailJoin, mwCancelJoin } from '@/api/middleware/mainJoin';
import { onMounted, ref } from 'vue';
import { useJoin } from '@/composable/join';
import { getAuthFromCookie, getUserFromCookie } from '@/composable/cookies';
import { mwApplyJoin, mwCancelApply } from '@/api/middleware/subJoin';
import { useAlarm } from '@/composable/alarm';
export default {
  components: { Modal },
  emits: ['toggle'],
  setup(props, { emit }) {
    const { alarmTriggerToast } = useAlarm();
    const myJoin = ref('false');
    const JoinInfo = ref({});
    const { target } = useJoin();
    const showUser = ref('');
    const userData = ref(JSON.parse(getUserFromCookie()));
    const toggle = () => {
      emit('toggle');
    };

    const showUserInfo = (id, nickname) => {
      showUser.value =
        process.env.VUE_APP_SERVER_TYPE === 'server' ? nickname : id;
      setTimeout(() => {
        showUser.value = '';
      }, 1000);
    };

    const applyJoin = async (roomNo, hostid) => {
      const data = {
        type: 'online',
        hostid: hostid,
        roomNo: roomNo,
        userid: getAuthFromCookie(),
      };
      alarmTriggerToast('온라인 조인을 신청하였습니다.');
      await mwApplyJoin(process.env.VUE_APP_SERVER_TYPE, data);
      emit('toggle');
    };
    const getJoinData = async () => {
      JoinInfo.value = await mwDetailJoin(
        process.env.VUE_APP_SERVER_TYPE,
        target.value,
        getAuthFromCookie()
      );

      if (JoinInfo.value.hostid === getAuthFromCookie()) {
        myJoin.value = 'host';
        return;
      }
      if (JoinInfo.value.isaccept === 1) {
        myJoin.value = 'true';
        return;
      }
      if (JoinInfo.value.isapply === 1) {
        myJoin.value = 'wait';
        return;
      }
      JoinInfo.value.members.forEach((user) => {
        if (user.id === getAuthFromCookie()) {
          myJoin.value = 'true';
        }
      });
    };
    const calcelJoin = async (roomNo) => {
      await mwCancelApply(
        process.env.VUE_APP_SERVER_TYPE,
        roomNo,
        process.env.VUE_APP_SERVER_TYPE === 'server'
          ? userData.value.userid
          : getAuthFromCookie()
      );
      alarmTriggerToast('조인을 취소 하였습니다.');
      emit('toggle');
    };

    const delJoin = async (roomNo) => {
      await mwCancelJoin(process.env.VUE_APP_SERVER_TYPE, roomNo);
      alarmTriggerToast('조인을 삭제하였습니다.');
      emit('toggle');
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
      calcelJoin,
      delJoin,
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
    width: 17rem;
    height: 15rem;
    box-shadow: 1px 1px 2px 2px gray;
  }
}
.join-member {
  dispay: block;
  overflow: scroll;
  box-sizing: border-box;
  line-break: auto;
  word-break: keep-all;
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgba(33, 33, 36, 0.07);
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #ced4da;

    &:hover {
      background-color: #adb5bd;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
}
.memeber-profile {
  display: flex;
  img {
    object-fit: cover;
    border-radius: 1rem;
    width: 50px;
    height: 50px;
  }
  div {
    display: flex;
    padding-left: 0.5rem;
    align-items: center;
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
  margin-top: 0.3rem;
  border-radius: 1rem;
  padding: 0.3rem;
  border: 1px solid rgba(33, 33, 36, 0.07);
  background-color: white;
}
@media (max-width: 1400px) {
  .join-container {
    padding: 0;
  }
}
</style>
