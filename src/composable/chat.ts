import { computed } from 'vue';
import { useStore } from 'vuex';

export const useChat = () => {
  const store = useStore();
  const ChatTarget = computed(() => store.state.chat.target);

  return {
    ChatTarget,
  };
};
