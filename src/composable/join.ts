import { computed } from 'vue';
import { useStore } from 'vuex';

export const useJoin = () => {
  const store = useStore();
  const target = computed(() => store.state.join.target);
  const updateTarget = (data: string) => store.commit('join/SET_TARGET', data);
  return {
    target,
    updateTarget,
  };
};
