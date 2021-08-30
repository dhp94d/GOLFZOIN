import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/index.vue';
import ChatPage from '@/pages/user/ChatPage.vue';
import JoinPage from '@/pages/join/index.vue';
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
          component: () =>
            import(
              /* webpackChunkName: "OnlineJoinPage" */ '@/pages/join/OnlineJoinPage.vue'
            ),
          beforeEnter,
        },
        {
          path: '/join/offlineJoin',
          name: 'OfflineJoin',
          component: () =>
            import(
              /* webpackChunkName: "OfflineJoinPage" */ '@/pages/join/OfflineJoinPage.vue'
            ),
          beforeEnter,
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
    next('/');
  }
}

router.beforeEach((to, from, next) => {
  store.commit('loading/startSpinner');
  setTimeout(() => {
    next();
  }, 20);
});

router.afterEach((to, from) => {
  store.commit('loading/endSpinner');
});

export default router;
