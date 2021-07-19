<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <NavTaps :taps="Taps"></NavTaps>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/Header.vue';
import NavTaps from '@/components/common/NavTaps.vue';

const Taps = [
  {
    title: '온라인 조인',
    link: '/onlineJoin',
    detailList: [
      { title: '전체 온라인 조인', link: '/onlinejoin' },
      { title: '온라인 조인 신청', link: '/onlinejoin/requestpage' },
      { title: '나의 온라인 조인', link: '/onlinejoin/mypage' },
    ],
  },
  {
    title: '오프라인 조인',
    link: '/offlineJoin',
    detailList: [
      { title: '전체 오프라인 조인', link: '/offlinejoin' },
      { title: '오프라인 조인 신청', link: '/offlinejoin/requestpage' },
      { title: '나의 오프라인 조인', link: '/offlinejoin/requestpage' },
    ],
  },
  {
    title: '유저',
    link: '/user',
    detailList: [
      { title: '팔로우', link: '/user' },
      { title: '대화', link: '/user/chatpage' },
      { title: '알림', link: '/user/notificationpage' },
    ],
  },
  {
    title: '일정관리',
    link: '/calendar',
    detailList: [{ title: '조인 일정', link: '/calendar' }],
  },
];
export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    NavTaps,
  },
  setup() {
    return {
      Taps,
    };
  },
});
</script>

<style>
#app {
  font-family: '돋움', dotum, Gulim, Helvetica, Sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-contents {
  padding: 1rem 23rem 0 23rem;
}
</style>
