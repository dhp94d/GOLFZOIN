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
import { defineComponent } from 'vue';
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
  { title: '계정', link: '/info' },
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
