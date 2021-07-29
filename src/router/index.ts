import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/index.vue';
import Login from '@/pages/auth/LoginPage.vue';
import Signup from '@/pages/auth/SignupPage.vue';
import Calendar from '@/pages/calendar/index.vue';
import ChatPage from '@/pages/user/ChatPage.vue';
import JoinPage from '@/pages/join/index.vue';
import MakeJoinPage from '@/pages/join/MakeJoinPage.vue';
import OnlineJoinPage from '@/pages/join/OnlineJoinPage.vue';
import OfflineJoinPage from '@/pages/join/OfflineJoinPage.vue';
import { getUserFromCookie } from '@/composable/cookies';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/user',
      name: 'ChatPage',
      component: ChatPage,
      children: [
        {
          path: '/user/Chatpage',
          name: 'ChatPage',
          component: ChatPage,
        },
      ],
      beforeEnter,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      beforeEnter,
    },
    {
      path: '/join',
      name: 'Join',
      component: JoinPage,
      children: [
        {
          path: '/join/makejoin',
          name: 'MakeJoinPage',
          component: MakeJoinPage,
        },
        {
          path: '/join/onlineJoin',
          name: 'OnlineJoin',
          component: OnlineJoinPage,
        },
        {
          path: '/join/offlineJoin',
          name: 'OfflineJoin',
          component: OfflineJoinPage,
        },
      ],
      beforeEnter,
    },
  ],
});
function beforeEnter(to: any, from: any, next: any) {
  if (store.getters['auth/isLoggedIn'] || getUserFromCookie()) {
    next();
  } else {
    alert('sign in please');
    next('/login');
  }
}

export default router;
