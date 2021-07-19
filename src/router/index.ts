import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/index.vue';
import Login from '@/pages/auth/LoginPage.vue';
import Signup from '@/pages/auth/SignupPage.vue';
import User from '@/pages/user/index.vue';
import Calendar from '@/pages/calendar/index.vue';
import OfflineJoin from '@/pages/offlineJoin/index.vue';
import OnlineJoin from '@/pages/onlineJoin/index.vue';
import ChatRoom from '@/components/user/ChatRoom.vue';
import ChatPage from '@/pages/user/ChatPage.vue';

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
      children: [
        {
          path: '/user/Chatpage',
          name: 'ChatPage',
          component: ChatPage,
        },
      ],
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/offlinejoin',
      name: 'OfflineJoin',
      component: OfflineJoin,
    },
    {
      path: '/onlinejoin',
      name: 'OnlineJoin',
      component: OnlineJoin,
    },
    {
      path: '/user/chatroom',
      name: 'ChatRoom',
      component: ChatRoom,
      props: true,
      beforeEnter: (to, from, next) => {
        to.params.name ? next() : next('/');
      },
    },
  ],
});
export default router;
