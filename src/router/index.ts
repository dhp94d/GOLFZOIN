import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/index.vue';
import JoinPage from '@/pages/join/index.vue';
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
      component: () =>
        import(/* webpackChunkName: "ChatPage" */ '@/pages/user/ChatPage.vue'),
      beforeEnter,
    },
    {
      path: '/user',
      name: 'UserPage',
      component: () =>
        import(/* webpackChunkName: "UserPage" */ '@/pages/user/index.vue'),
      beforeEnter,
      children: [
        {
          path: '/user/search',
          name: 'UserSearchPage',
          component: () =>
            import(
              /* webpackChunkName: "UserSearchPage" */ '@/pages/user/UserSearchPage.vue'
            ),
          beforeEnter,
        },
        {
          path: '/user/following',
          name: 'FollowingPage',
          component: () =>
            import(
              /* webpackChunkName: "FollowingPage" */ '@/pages/user/FollowingPage.vue'
            ),
          beforeEnter,
        },
        {
          path: '/user/follower',
          name: 'FollowerPage',
          component: () =>
            import(
              /* webpackChunkName: "FollowerPage" */ '@/pages/user/FollowerPage.vue'
            ),
          beforeEnter,
        },
        {
          path: '/user/alarm',
          name: 'AlarmPage',
          component: () =>
            import(
              /* webpackChunkName: "AlarmPage" */ '@/pages/user/AlarmPage.vue'
            ),
          beforeEnter,
        },
      ],
    },

    {
      path: '/calendar',
      name: 'CalendarPage',
      component: () =>
        import(
          /* webpackChunkName: "CalendarPage" */ '@/pages/user/CalendarPage.vue'
        ),
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
