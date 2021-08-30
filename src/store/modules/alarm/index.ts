export default {
  namespaced: true,
  state: {
    toastMessage: '',
    toastAlertType: 'success',
    showToast: false,
    timeout: '',
  },
  getters: {},
  mutations: {
    triggerToast(
      state: { showToast: boolean; toastMessage: string; timeout: any },
      payload: string
    ) {
      state.toastMessage = payload;
      state.showToast = true;
      state.timeout = setTimeout(() => {
        state.toastMessage = '';
        state.showToast = false;
      }, 5000);
    },
  },
  actions: {},
};
