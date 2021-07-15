import axios from 'axios';
interface StateDTO {
  email: string;
  password: string;
  name: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
  address: string;
  hit: string;
}

export default {
  namespaced: true,
  state: {
    email: '',
    password: '',
    name: '',
    nickname: '',
    birthday: '',
    phoneNumber: '',
    address: '',
    hit: '',
    isLogin: false,
  },
  mutations: {
    UPDATE_AUTH_ISLOGIN(state: { isLogin: boolean }, payload: boolean) {
      state.isLogin = payload;
    },
    UPDATE_AUTH_EMAIL(state: { email: string }, payload: string) {
      state.email = payload;
    },
    UPDATE_AUTH_PASSWORD(state: { password: string }, payload: string) {
      state.password = payload;
    },
    UPDATE_AUTH_NAME(state: { name: string }, payload: string) {
      state.name = payload;
    },
    UPDATE_AUTH_NICKNAME(state: { nickname: string }, payload: string) {
      state.nickname = payload;
    },
    UPDATE_AUTH_BIRTHDAY(state: { birthday: string }, payload: string) {
      state.birthday = payload;
    },
    UPDATE_AUTH_PHONENUMBER(state: { phoneNumber: string }, payload: string) {
      state.phoneNumber = payload;
    },
    UPDATE_AUTH_ADDRESS(state: { address: string }, payload: string) {
      state.address = payload;
    },
    UPDATE_AUTH_HIT(state: { hit: string }, payload: string) {
      state.hit = payload;
    },
  },
  actions: {
    async LOGIN({ commit }: any, data: StateDTO) {
      const response = await axios.get(
        `http://localhost:3000/users?email=${data.email}&password=${data.password}`
      );
      const auth = response.data[0];
      commit('UPDATE_AUTH_EMAIL', auth.email);
      commit('UPDATE_AUTH_PASSWORD', auth.password);
      commit('UPDATE_AUTH_NAME', auth.name);
      commit('UPDATE_AUTH_NICKNAME', auth.nickname);
      commit('UPDATE_AUTH_BIRTHDAY', auth.birthday);
      commit('UPDATE_AUTH_PHONENUMBER', auth.phoneNumber);
      commit('UPDATE_AUTH_ADDRESS', auth.address);
      commit('UPDATE_AUTH_HIT', auth.hit);
      commit('UPDATE_AUTH_ISLOGIN', true);

      // saveUserToCookie(response.data.user.username);
      // saveAuthToCookie(response.data.token);
      return response;
    },
  },
  getters: {},
};
