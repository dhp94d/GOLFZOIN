import { computed } from 'vue';
import { useStore } from 'vuex';

export const useLoading = () => {
  const store = useStore();
  const loadingStatus = computed(() => store.state.loading.LoadingStatus);
  const startSpinner = () => store.commit('loading/startSpinner');
  const endSpinner = () => store.commit('loading/endSpinner');

  return {
    loadingStatus,
    startSpinner,
    endSpinner,
  };
};
