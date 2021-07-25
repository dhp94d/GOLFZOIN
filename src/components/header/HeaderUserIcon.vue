<template>
  <div class="dropdown">
    <div class="header-user" @click="userToggle">
      <i class="fa fa-bars fa-2x tap" aria-hidden="true"></i>
      <template v-if="AuthEmail">
        <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
      </template>
      <template v-else>
        <i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
      </template>
    </div>
    <ul class="header-user-dropdown" v-show="dropdownToggle">
      <div
        v-for="(data, index) in AuthEmail === '' ? LOGGED : NOTLOGGED"
        :key="`userTap${index}`"
      >
        <li>
          <router-link :to="`${data.link}`">{{ data.title }}</router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuth } from '@/composable/auth';
const LOGGED = [
  { title: '로그인 하기', link: '/login' },
  { title: '회원가입 하기', link: '/signup' },
];
const NOTLOGGED = [
  { title: '채팅', link: '/user' },
  { title: '알림' },
  { title: '일정관리' },
  { title: '계정' },
  { title: '로그아웃' },
];
export default defineComponent({
  setup() {
    const { AuthEmail }: any = useAuth();
    const dropdownToggle = ref(false);

    const userToggle = () => {
      dropdownToggle.value = !dropdownToggle.value;
      console.log(dropdownToggle.value);
    };
    return {
      userToggle,
      dropdownToggle,
      LOGGED,
      NOTLOGGED,
      AuthEmail,
    };
  },
});
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.header-user {
  background-color: white;
  cursor: pointer;
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: right;
  padding: 0.7rem;
  border: 1px solid black;
  border-radius: 2rem;
  border-color: rgb(211, 211, 211);
}
.header-user .tap {
  padding-right: 0.5rem;
}

.header-user-dropdown {
  display: block;
  position: relative;
  box-shadow: 0px 0px 1px 1px #ebebeb;
  border-radius: 1rem;
  background-color: white;
  min-width: 13rem;
  padding: 1rem 1.3rem 0.5rem 1.3rem;
  margin-top: 0.4rem;
  font-size: 1.3rem;
  list-style: none;
  z-index: 1;
}
.header-user-dropdown li {
  padding-bottom: 0.8rem;
}

.header-user-dropdown a {
  text-decoration: none;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #797979;
}

.header-user-dropdown a:hover {
  color: black;
}
</style>
