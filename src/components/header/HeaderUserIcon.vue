<template>
  <div class="header-icon">
    <DropDown :marginTop="'0.3'">
      <template v-slot:header>
        <div class="header-user">
          <i class="fa fa-bars fa-1x tap" aria-hidden="true"></i>
          <template v-if="authIsLoggedIn">
            <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
          </template>
          <template v-else>
            <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
          </template>
        </div>
      </template>
      <template v-slot:body>
        <ul class="header-user-dropdown">
          <template v-if="authIsLoggedIn">
            <div v-for="(data, index) in LOGGED" :key="`userTap${index}`">
              <router-link :to="`${data.link}`"
                ><li>{{ data.title }}</li></router-link
              >
            </div>
            <li>
              <div @click="userToggle">내 정보</div>
              <div v-if="openUser">
                <UserInfo @toggle="userToggle"></UserInfo>
              </div>
            </li>
            <li @click="logoutClick">로그아웃</li>
          </template>
          <template v-else>
            <li>
              <div @click="loginToggle">로그인</div>
              <div v-if="openLogin">
                <LoginForm @toggle="loginToggle"></LoginForm>
              </div>
            </li>
            <li>
              <div @click="signupToggle">회원가입</div>
              <div v-if="openSignup">
                <SignupForm @toggle="signupToggle"></SignupForm>
              </div>
            </li>
          </template>
        </ul>
      </template>
    </DropDown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth } from '@/composable/auth';
import { useRouter } from 'vue-router';
import DropDown from '@/components/common/DropDown.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
import SignupForm from '@/components/auth/SignupForm.vue';
import UserInfo from '@/components/user/UserInfo.vue';
import { logout } from '@/middleware/auth';
import { ref } from 'vue';

const LOGGED = [
  { title: '채팅', link: '/user' },
  { title: '알림' },
  { title: '일정관리', link: '/calendar' },
];
export default defineComponent({
  components: {
    DropDown,
    LoginForm,
    SignupForm,
    UserInfo,
  },
  setup() {
    const router = useRouter();
    const openLogin = ref(false);
    const openSignup = ref(false);
    const openUser = ref(false);
    const { authIsLoggedIn, authLogout }: any = useAuth();

    const logoutClick = () => {
      // authLogout();
      logout('firebase');
      router.push({
        name: 'Main',
      });
    };

    const loginToggle = () => {
      if (openLogin.value) {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      } else {
        document.querySelector('body')?.classList.add('overflow-hidden');
      }
      openLogin.value = !openLogin.value;
      openSignup.value = false;
      openUser.value = false;
    };

    const signupToggle = () => {
      if (openSignup.value) {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      } else {
        document.querySelector('body')?.classList.add('overflow-hidden');
      }
      openSignup.value = !openSignup.value;
      openLogin.value = false;
      openUser.value = false;
    };

    const userToggle = () => {
      if (openUser.value) {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      } else {
        document.querySelector('body')?.classList.add('overflow-hidden');
      }
      openUser.value = !openUser.value;
      openLogin.value = false;
      openSignup.value = false;
    };
    return {
      LOGGED,
      authIsLoggedIn,
      logoutClick,
      openLogin,
      openSignup,
      loginToggle,
      signupToggle,
      userToggle,
      openUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-icon {
  display: flex;
  flex-direction: column;
  align-self: center;
  bottom: 0;
  z-index: 1;
}
.header-user {
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid black;
  border-color: rgb(211, 211, 211);
  .tap {
    padding-right: 0.5rem;
  }
}

.header-user-dropdown {
  font-size: 1rem;
  list-style: none;
  padding: 0 0.2rem;
  margin: 0;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      cursor: pointer;
      font-weight: 800;
      color: black;
    }
  }
  li {
    &:hover {
      cursor: pointer;
      font-weight: 800;
      color: black;
    }
  }
}
</style>
