<template>
  <div class="dropdown">
    <div class="header-user" @click="userToggle">
      <i class="fa fa-bars fa-1x tap" aria-hidden="true"></i>
      <template v-if="authIsLoggedIn">
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
      </template>
      <template v-else>
        <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
      </template>
    </div>
    <ul class="header-user-dropdown" v-show="dropdownToggle">
      <div
        v-for="(data, index) in authIsLoggedIn ? LOGGED : NOTLOGGED"
        :key="`userTap${index}`"
      >
        <router-link :to="`${data.link}`"
          ><li>{{ data.title }}</li></router-link
        >
      </div>
      <li v-show="authIsLoggedIn" @click="logout">로그아웃</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuth } from '@/composable/auth';
import { useRouter } from 'vue-router';

const NOTLOGGED = [
  { title: '로그인 하기', link: '/login' },
  { title: '회원가입 하기', link: '/signup' },
];
const LOGGED = [
  { title: '채팅', link: '/user' },
  { title: '알림' },
  { title: '일정관리' },
  { title: '계정' },
];
export default defineComponent({
  setup() {
    const router = useRouter();
    const { authIsLoggedIn, authLogout }: any = useAuth();
    const dropdownToggle = ref(false);
    const userToggle = () => {
      dropdownToggle.value = !dropdownToggle.value;
    };
    const logout = () => {
      authLogout();
      router.push({
        name: 'Main',
      });
    };
    return {
      userToggle,
      dropdownToggle,
      LOGGED,
      NOTLOGGED,
      authIsLoggedIn,
      logout,
    };
  },
});
</script>

<style>
.dropdown {
  position: block;
}

.header-user {
  display: block;
  float: right;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border: 1px solid black;
  border-radius: 2rem;
  border-color: rgb(211, 211, 211);
}
.header-user .tap {
  padding-right: 0.5rem;
}

.header-user-dropdown {
  position: relative;
  display: inline-block;
  float: right;
  box-shadow: 0px 0px 1px 1px #ebebeb;
  border-radius: 1rem;
  background-color: white;
  min-width: 9rem;
  padding: 1rem 1rem 0.5rem 1rem;
  margin-top: 0.4rem;
  font-size: 1.2rem;
  list-style: none;
  z-index: 1;
}
.header-user-dropdown li {
  padding-bottom: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  color: #797979;
  text-decoration: none;
}

.header-user-dropdown a {
  text-decoration: none;
}

.header-user-dropdown li:hover {
  color: black;
}
</style>
