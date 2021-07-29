import { getJoin } from '@/api/join';
interface joinDTO {
  type: string;
  data: [];
}

export default {
  namespaced: true,
  state: {
    join: [
      {
        type: '',
        data: [],
      },
    ],
    onlineJoin: [
      {
        type: '',
        data: [],
      },
    ],
    offlineJoin: [
      {
        type: '',
        data: [],
      },
    ],
  },
  getters: {
    getOnlineJoin(state: { join: joinDTO[]; onlineJoin: joinDTO[] }) {
      state.onlineJoin = state.join.filter((v) => v.type === 'online');
      return state.onlineJoin;
    },
    getOfflineJoin(state: { join: joinDTO[]; offlineJoin: joinDTO[] }) {
      state.offlineJoin = state.join.filter((v) => v.type !== 'online');
      return state.offlineJoin;
    },
    getOnlineJoinLen(state: { onlineJoin: joinDTO[] }) {
      return state.onlineJoin.length;
    },
    getOfflineJoinLen(state: { offlineJoin: joinDTO[] }) {
      return state.offlineJoin.length;
    },
  },
  mutations: {
    SET_JOIN(state: { join: [] }, payload: []) {
      state.join = payload;
    },
  },
  actions: {
    async GETJOIN({ commit }: any) {
      const response = await getJoin();
      commit('SET_JOIN', response.data);
    },
  },
};
