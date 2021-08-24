import dayjs from 'dayjs';

export default {
  namespaced: true,
  state: {
    day: 0,
    year: dayjs().year(),
    month: dayjs().month() + 1,
    monthJoinList: {},
    monthAllJoinList: {},
  },
  mutations: {
    INCREMENT_MONTH(state: { month: number; year: number }) {
      if (state.month === 12) {
        state.month = 1;
        state.year = state.year + 1;
        return;
      }
      state.month += 1;
    },
    DECREMENT_MONTH(state: { month: number; year: number }) {
      if (state.month === 1) {
        state.month = 12;
        state.year = state.year - 1;
        return;
      }
      state.month -= 1;
    },
    UPDATE_DAY(state: { day: number }, payload: number) {
      if (state.day === payload) {
        state.day = 0;
        return;
      }
      state.day = payload;
    },
    UPDATE_CURRENT_JOINLIST(
      state: { monthJoinList: any; monthAllJoinList: any },
      payload: []
    ) {
      state.monthJoinList = {};
      state.monthAllJoinList = payload;
      payload.forEach((v: any) => {
        if (state.monthJoinList[v.date.slice(8)]) {
          state.monthJoinList[v.date.slice(8)].push(v);
          return;
        }
        state.monthJoinList[v.date.slice(8)] = [v];
      });
    },
  },
  actions: {},
  getters: {},
};
