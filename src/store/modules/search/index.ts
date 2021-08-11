export default {
  namespaced: true,
  state: {
    date: '',
    address: {
      latitude: '',
      longitude: '',
      addressName: '',
    },
    pNumber: 0,
  },
  mutations: {
    SET_SEARCH_DATE(state: { date: string }, payload: string) {
      state.date = payload;
    },
    SET_SEARCH_ADDRESS(
      state: {
        address: {
          latitude: string;
          longitude: string;
          addressName: string;
        };
      },
      payload: { latitude: string; longitude: string; addressName: string }
    ) {
      state.address.latitude = payload.latitude;
      state.address.longitude = payload.longitude;
      state.address.addressName = payload.addressName;
    },
    SET_SEARCH_PNUMBER(state: { pNumber: number }, payload: number) {
      state.pNumber = payload;
    },
  },
  actions: {},
  getters: {},
};
