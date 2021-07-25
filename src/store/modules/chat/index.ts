export default {
  namespaced: true,
  state: {
    target: '',
  },
  mutations: {
    UPDATE_CHAT_TARGET(state: { target: string }, payload: string) {
      state.target = payload;
    },
  },
  actions: {},
  getters: {},
};
