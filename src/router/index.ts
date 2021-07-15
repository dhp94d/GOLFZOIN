import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/index.vue';
import Login from '@/pages/auth/LoginPage.vue';
import Signup from '@/pages/auth/SignupPage.vue';
import User from '@/pages/user/index.vue';
import Calendar from '@/pages/calendar/index.vue';
import OfflineJoin from '@/pages/offlineJoin/index.vue';
import OnlineJoin from '@/pages/onlineJoin/index.vue';

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
      name: 'User',
      component: User,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/offlineJoin',
      name: 'OfflineJoin',
      component: OfflineJoin,
    },
    {
      path: '/onlineJoin',
      name: 'OnlineJoin',
      component: OnlineJoin,
    },
  ],
});

export default router;
