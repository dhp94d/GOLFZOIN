export default {
  namespaced: true,
  state: {
    target: '',
    titleData: { title: '', thumbnail: '' },
    chatData: [],
  },
  mutations: {
    SET_CHAT_TARGET(state: { target: string }, payload: string) {
      state.target = payload;
    },
    SET_CHAT_TITLEDATA(state: { titleData: object }, payload: object) {
      state.titleData = payload;
    },
    SET_CHAT_DATA(state: { chatData: [] }, payload: []) {
      state.chatData = payload;
    },
  },
  actions: {},
  getters: {},
};
