<template>
  <div style="position: relative">
    <DropDown :marginTop="0.3">
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
      </template>
    </DropDown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuth } from '@/composable/auth';
import { useRouter } from 'vue-router';
import DropDown from '@/components/common/DropDown.vue';

const NOTLOGGED = [
  { title: '로그인 하기', link: '/login' },
  { title: '회원가입 하기', link: '/signup' },
];
const LOGGED = [
  { title: '채팅', link: '/user' },
  { title: '알림' },
  { title: '일정관리', link: '/calendar' },
  { title: '계정' },
];
export default defineComponent({
  components: {
    DropDown,
  },
  setup() {
    const router = useRouter();
    const { authIsLoggedIn, authLogout }: any = useAuth();
    const logout = () => {
      authLogout();
      router.push({
        name: 'Main',
      });
    };
    return {
      LOGGED,
      NOTLOGGED,
      authIsLoggedIn,
      logout,
    };
  },
});
</script>

<style>
.header-user {
  position: relative;
  width: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border-radius: 2rem;
  border-color: rgb(211, 211, 211);
}
.header-user .tap {
  padding-right: 0.5rem;
}

.header-user-dropdown {
  font-size: 1.2rem;
  list-style: none;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 0;
  z-index: 1;
}
.header-user-dropdown li {
  padding-bottom: 0.5rem;
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
