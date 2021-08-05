import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAddress = () => {
  const store = useStore();
  const SearchDate = computed(() => store.state.search.date);
  const SearchAddress = computed(() => store.state.search.address);
  const SearchPNumber = computed(() => store.state.search.pNumber);

  return {
    SearchDate,
    SearchAddress,
    SearchPNumber,
  };
};
