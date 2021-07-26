export default {
  namespaced: true,
  state: {
    target: '',
    chatData: [],
  },
  mutations: {
    SET_CHAT_TARGET(state: { target: string }, payload: string) {
      state.target = payload;
    },
    SET_CHAT_DATA(state: { chatData: [] }, payload: []) {
      state.chatData = payload;
    },
  },
  actions: {},
  getters: {},
};
