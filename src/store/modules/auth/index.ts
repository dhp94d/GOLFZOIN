import { loginUser } from '@/api/auth';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
} from '@/composable/cookies';
import { isLoggedin } from '@/middleware/auth';

interface userDTO {
  email: string;
  password: string;
  nickname: string;
  birthday: string;
  gender: string;
  profile: string;
  phoneNumber: string;
  address: string;
  hit: string;
}
interface stateDTO {
  user: Object;
  token: string;
}

export default {
  namespaced: true,
  state: {
    user: {},
    email: '',
    token: '',
  },
  getters: {
    isLoggedIn(state: { token: string }) {
      return !!state?.token || !!getUserFromCookie();
    },
    userToken(state: { token: string }) {
      return state.token;
    },
    getEmail(state: { email: string }) {
      return state.email;
    },
  },
  mutations: {
    SET_EMAIL(state: { email: string }) {
      state.email = getUserFromCookie();
    },
    SET_USER(state: { user: userDTO }, payload: userDTO) {
      state.user = { ...payload };
    },
    SET_TOKEN(state: { token: string }, payload: string) {
      state.token = payload;
    },
    LOGOUT(state: stateDTO) {
      state.user = {};
      state.token = '';
      deleteCookie('til_auth');
      deleteCookie('til_user');
    },
  },
  actions: {
    async LOGIN({ commit }: any, data: { email: string; pw: string }) {
      const response = await loginUser(
        `?email=${data.email}&password=${data.pw}`
      );
      const auth = response.data[0];
      commit('SET_USER', auth);
      commit('SET_TOKEN', auth.email);
      saveUserToCookie(auth.email);
      saveAuthToCookie(auth.email);
      return response;
    },
  },
};
