import { getUserFromCookie, deleteCookie } from '@/composable/cookies';

export default {
  namespaced: true,
  state: {
    user: {},
    eamil: '',
  },
  getters: {
    isLoggedIn(state: { eamil: object }) {
      return !!state?.eamil || !!getUserFromCookie();
    },
    getUser(state: { email: string }) {
      return state.email;
    },
  },
  mutations: {
    SET_USER(state: { user: object }, payload: object) {
      state.user = { ...payload };
    },
    LOGOUT(state: { user: object }) {
      state.user = {};
      deleteCookie('til_auth');
      deleteCookie('til_user');
    },
  },
  actions: {
    LOGIN({ commit }: any) {
      const userData = JSON.parse(getUserFromCookie());
      commit('SET_USER', userData);
    },
  },
};
