<template>
  <div class="user-Frame">
    <div v-if="openUserInfo">
      <UserInfo @toggle="userToggle" :userId="targetId"></UserInfo>
    </div>
    <UserSidebar :type="'following'"></UserSidebar>
    <div class="user-body">
      <UserTapHeader :title="'팔로잉'"> </UserTapHeader>
      <ul class="user-search-body">
        <div v-for="user in users" :key="user.id">
          <li :id="user.id" @click.prevent="userToggle(user.id)">
            <div class="chat-nav-room">
              <div class="chat-nav-room-profile">
                <img class="profile-image" :src="user.profile" alt="profile" />
              </div>
              <div class="chat-nav-room-body">
                <div class="preview-title-wrap preview-div">
                  <span class="nickname">{{ user.nickname }}</span>
                </div>
              </div>
              <div>
                <span>
                  유저 정보보기
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </li>
        </div>
      </ul>
      <div class="user-search-footer"></div>
    </div>
  </div>
</template>

<script>
import UserSidebar from '@/components/user/UserSidevar.vue';
import UserTapHeader from '@/components/user/UserTapHeader.vue';
import UserInfo from '@/components/user/UserInfo.vue';
import { mwGetFollowing } from '@/api/middleware/user';
import { onMounted, ref, watch } from 'vue';
import { getAuthFromCookie } from '@/composable/cookies';

export default {
  components: {
    UserSidebar,
    UserTapHeader,
    UserInfo,
  },
  setup() {
    const users = ref();
    const targetId = ref('');
    const openUserInfo = ref(false);

    const getFollowing = async () => {
      const res = await mwGetFollowing(
        process.env.VUE_APP_SERVER_TYPE,
        getAuthFromCookie()
      );
      users.value = res;
    };

    const userToggle = (id) => {
      targetId.value = id;
      openUserInfo.value = !openUserInfo.value;
    };
    watch(openUserInfo, () => getFollowing());
    onMounted(() => getFollowing());
    return {
      targetId,
      userToggle,
      users,
      openUserInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  font-size: 0.7rem;
}
.user-Frame {
  display: flex;
  justify-content: space-between;
}
.user-body {
  height: 83vh;
  width: 20vw;
  display: flex;
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
  padding: 16px;
  height: 72px;
  border-bottom: 1px solid var(--divider-line);
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: perspective(1px) translateZ(0px);
  transition: color 0.5s ease 0s;
  &:hover {
    cursor: pointer;
    background-color: rgba(33, 33, 36, 0.07);
  }
}
.chat-nav-room-profile {
  margin-right: 8px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.chat-nav-room-body {
  flex: 1 0 0%;
  width: 0px;
}
.preview-title-wrap {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .nickname {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 20px;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: -0.02em;
    color: #212124;
  }
  .css-1kscqop .preview-title-wrap .sub-text {
    margin-left: 4px;
    color: #868b94;
    font-size: 12px;
  }
}
.preview-description {
  display: block;
  height: 20px;
  font-size: 13px;
  color: var(--gray-700);
}

.preview-div {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1400px) {
  .user-body {
    width: 85vw;
    height: 78vh;
  }
  .user-search-body {
    width: 85vw;
  }
  .user-search-footer {
    width: 85vw;
  }
}
</style>
