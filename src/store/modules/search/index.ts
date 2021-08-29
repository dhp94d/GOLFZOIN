export default {
  namespaced: true,
  state: {
    data: '',
    follow: 0,
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
    SET_SEARCH_DATA(state: { data: string }, payload: string) {
      state.data = payload;
    },
    SET_SEARCH_FOLLOW(state: { follow: number }, payload: number) {
      state.follow = payload;
    },
    SET_SEARCH_INIT(state: any) {
      console.log('왜글');

      state.data = '';
      state.follow = 0;
      state.date = '';
      (state.address = {
        latitude: '',
        longitude: '',
        addressName: '',
      }),
        (state.pNumber = 0);
    },
  },
  actions: {},
  getters: {},
};
