import { computed } from 'vue';
import { useStore } from 'vuex';

export const useSearch = () => {
  const store = useStore();
  const SearchDate = computed(() => store.state.search.date);
  const SearchData = computed(() => store.state.search.data);
  const SearchFollow = computed(() => store.state.search.follow);
  const SearchAddress = computed(() => store.state.search.address);
  const SearchPNumber = computed(() => store.state.search.pNumber);
  const updateDate = (data: string) =>
    store.commit('search/SET_SEARCH_DATE', data);
  const updateData = (data: string) =>
    store.commit('search/SET_SEARCH_DATA', data);
  const updateFollow = (data: number) =>
    store.commit('search/SET_SEARCH_FOLLOW', data);
  const updateAddress = (
    latitude: string,
    longitude: string,
    addressName: string
  ) =>
    store.commit('search/SET_SEARCH_ADDRESS', {
      latitude,
      longitude,
      addressName,
    });
  const updatePNumber = (data: number) =>
    store.commit('search/SET_SEARCH_PNUMBER', data);
  const init = () => {
    store.commit('search/SET_SEARCH_INIT');
  };
  return {
    SearchDate,
    SearchAddress,
    SearchPNumber,
    SearchData,
    SearchFollow,
    updateDate,
    updateData,
    updateFollow,
    updateAddress,
    updatePNumber,
    init,
  };
};
