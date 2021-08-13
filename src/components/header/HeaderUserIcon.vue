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
            <li @click="logout">로그아웃</li>
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
import { ref } from 'vue';

const LOGGED = [
  { title: '채팅', link: '/user' },
  { title: '알림' },
  { title: '일정관리', link: '/calendar' },
  { title: '계정', link: '/info' },
];
export default defineComponent({
  components: {
    DropDown,
    LoginForm,
    SignupForm,
  },
  setup() {
    const router = useRouter();
    const openLogin = ref(false);
    const openSignup = ref(false);
    const { authIsLoggedIn, authLogout }: any = useAuth();
    const logout = () => {
      authLogout();
      router.push({
        name: 'Main',
      });
    };

    const loginToggle = () => {
      openLogin.value = !openLogin.value;
      openSignup.value = false;
    };
    const signupToggle = () => {
      openSignup.value = !openSignup.value;
      openLogin.value = false;
    };
    return {
      LOGGED,
      authIsLoggedIn,
      logout,
      openLogin,
      openSignup,
      loginToggle,
      signupToggle,
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
