export default {
  namespaced: true,
  state: {
    target: '',
  },
  getters: {},
  mutations: {
    SET_TARGET(state: { target: string }, payload: string) {
      state.target = payload;
    },
  },
  actions: {},
};
