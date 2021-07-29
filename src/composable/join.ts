import { computed } from 'vue';
import { useStore } from 'vuex';

export const useJoin = () => {
  const store = useStore();
  const onlineJoinList = computed(() => store.state.join.onlineJoin);
  const offlineJoinList = computed(() => store.state.join.offlineJoin);
  const onlineJoinLen = computed(() => store.getters['join/getOnlineJoinLen']);
  const offlineJoinLen = computed(
    () => store.getters['join/getOfflineJoinLen']
  );
  return {
    onlineJoinList,
    offlineJoinList,
    onlineJoinLen,
    offlineJoinLen,
  };
};
