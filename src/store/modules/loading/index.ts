export default {
  namespaced: true,
  state: {
    LoadingStatus: false,
  },
  getters: {},
  mutations: {
    startSpinner(state: { LoadingStatus: boolean }) {
      state.LoadingStatus = true;
    },
    endSpinner(state: { LoadingStatus: boolean }) {
      state.LoadingStatus = false;
    },
  },
  actions: {},
};
