<template>
  <div class="user-Frame">
    <UserSidebar :type="'alarm'"></UserSidebar>
    <div class="user-body">
      <UserTapHeader :title="'알림'"> </UserTapHeader>
      <ul class="user-search-body">
        <div
          v-for="(alarm, index) in alarmList"
          :key="`${index}${alarm.roomNo}`"
        >
          <li>
            <div class="chat-nav-room">
              <div>
                <div class="alarm-title">조인 명: {{ alarm.title }}</div>
                <div class="alarm-body">
                  신청자: {{ alarm.nickname }}
                  <span @click="showUser(alarm.id)">
                    유저 정보보기
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div>
                <div
                  @click="
                    accepButton(
                      alarm.type,
                      alarm.roomNo,
                      alarm.userid,
                      alarm.alarmid
                    )
                  "
                >
                  <i class="fa fa-check accept-icon" aria-hidden="true"></i>
                </div>
                <div @click="refuseButton()">
                  <i class="fa fa-times cancel-icon" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </li>
        </div>
      </ul>
      <div class="user-search-footer"></div>
    </div>
    <div v-if="openUserInfo">
      <UserInfo @toggle="showUser" :userId="targetId"></UserInfo>
    </div>
  </div>
</template>

<script>
import UserSidebar from '@/components/user/UserSidevar.vue';
import UserTapHeader from '@/components/user/UserTapHeader.vue';
import UserInfo from '@/components/user/UserInfo.vue';
import { mwGetAlarm } from '@/api/middleware/subJoin';
import { onMounted, ref } from 'vue';
import { getAuthFromCookie } from '@/composable/cookies';

export default {
  components: {
    UserSidebar,
    UserTapHeader,
    UserInfo,
  },
  setup() {
    const alarmList = ref([]);
    const openUserInfo = ref(false);
    const targetId = ref('');

    const showUser = (userId) => {
      targetId.value = userId;
      openUserInfo.value = !openUserInfo.value;
    };
    const accepButton = (type, roomNo, userid) => {
      const data = {
        type: type,
        roomNo: roomNo,
        userid: userid,
        logtype: 'accept',
      };
    };
    const refuseButton = (type, roomNo, userid) => {
      const data = {
        type: type,
        roomNo: roomNo,
        userid: userid,
        logtype: 'refuse',
      };
    };

    const getAlarm = async () => {
      alarmList.value = await mwGetAlarm(
        process.env.VUE_APP_SERVER_TYPE,
        getAuthFromCookie()
      );
    };

    onMounted(() => getAlarm());
    return {
      alarmList,
      showUser,
      refuseButton,
      accepButton,
      openUserInfo,
      targetId,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-Frame {
  display: flex;
  justify-content: space-between;
}
.user-body {
  height: 83vh;
  width: 20vw;
  border-right: 1px solid rgba(33, 33, 36, 0.07);
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}
.user-search-body {
  position: relative;
  height: calc(100% - 56px);
  list-style: none;
  overflow: hidden auto;
  background-color: #fff;
  list-style: none;
  padding: 0px;
  list-style-type: disc;
  width: 20vw;
}
.user-search-footer {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(33, 33, 36, 0.07);
  background-color: white;
  height: 7vh;
  min-height: 56px;
  width: 20vw;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
}
.chat-nav-room {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid rgba(33, 33, 36, 0.07);
  &:hover {
    cursor: pointer;
    background-color: rgba(33, 33, 36, 0.07);
  }
}
.accept-icon {
  color: #006eb7;
}
.cancel-icon {
  color: #ee1d08;
}
.alarm-title {
  font-size: 1rem;
}
.alarm-body {
  font-size: 1rem;
  span {
    font-size: 0.7rem;
  }
}
</style>
