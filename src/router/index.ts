import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/index.vue';
import ChatPage from '@/pages/user/ChatPage.vue';
import JoinPage from '@/pages/join/index.vue';
import OnlineJoinPage from '@/pages/join/OnlineJoinPage.vue';
import OfflineJoinPage from '@/pages/join/OfflineJoinPage.vue';
import OnlineJoinDetailPage from '@/pages/join/OnlineJoinDetailPage.vue';
import OfflineJoinDetailPage from '@/pages/join/OfflineJoinDetailPage.vue';
import CalendarPage from '@/pages/user/CalendarPage.vue';
import FollowingPage from '@/pages/user/FollowingPage.vue';
import FollowerPage from '@/pages/user/FollowerPage.vue';
import AlarmPage from '@/pages/user/AlarmPage.vue';
import UserPage from '@/pages/user/index.vue';
import UserSearchPage from '@/pages/user/UserSearchPage.vue';
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
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage,
      beforeEnter,
    },
    {
      path: '/user',
      name: 'UserPage',
      component: UserPage,
      beforeEnter,
      children: [
        {
          path: '/user/search',
          name: 'UserSearchPage',
          component: UserSearchPage,
          beforeEnter,
        },
        {
          path: '/user/following',
          name: 'FollowingPage',
          component: FollowingPage,
          beforeEnter,
        },
        {
          path: '/user/follower',
          name: 'FollowerPage',
          component: FollowerPage,
          beforeEnter,
        },
        {
          path: '/user/alarm',
          name: 'AlarmPage',
          component: AlarmPage,
          beforeEnter,
        },
      ],
    },

    {
      path: '/calendar',
      name: 'CalendarPage',
      component: CalendarPage,
      beforeEnter,
    },
    {
      path: '/join',
      name: 'Join',
      component: JoinPage,
      children: [
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
        {
          path: '/join/onlinedetailJoin',
          name: 'OnlineDetailJoin',
          component: OnlineJoinDetailPage,
        },
        {
          path: '/join/offlinedetailJoin',
          name: 'OfflineDetailJoin',
          component: OfflineJoinDetailPage,
        },
      ],
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
