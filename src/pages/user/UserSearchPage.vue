<template>
  <div class="user-Frame">
    <div v-if="openUserInfo">
      <UserInfo @toggle="userToggle" :userId="targetId"></UserInfo>
    </div>
    <UserSidebar :type="'user'"></UserSidebar>
    <div class="user-body">
      <UserTapHeader :title="'유저'">
        <template v-slot:option>
          <div class="col-lg-6">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search for user"
                v-model="user"
                @keyup.enter="searchUser"
              />
              <span class="input-group-btn" @click="searchUser">
                <button class="btn" type="button">
                  <i class="fa fa-search search-icon" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </div>
        </template>
      </UserTapHeader>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
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
import { mwFindUser } from '@/api/middleware/user';
import { ref } from 'vue';

export default {
  components: {
    UserSidebar,
    UserTapHeader,
    UserInfo,
  },
  setup() {
    const user = ref('');
    const users = ref();
    const targetId = ref('');
    const openUserInfo = ref(false);

    const searchUser = async () => {
      if (user.value === '') {
        return;
      }
      const res = await mwFindUser(process.env.VUE_APP_SERVER_TYPE, user.value);
      users.value = res;
    };

    const userToggle = (id) => {
      targetId.value = id;
      openUserInfo.value = !openUserInfo.value;
    };
    return {
      user,
      searchUser,
      users,
      userToggle,
      openUserInfo,
      targetId,
    };
  },
};
</script>

<style lang="scss" scope>
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
</style>
