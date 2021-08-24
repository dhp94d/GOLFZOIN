import { computed } from 'vue';
import { useStore } from 'vuex';

export const useChat = () => {
  const store = useStore();
  const chatTarget = computed(() => store.state.chat.target);
  const chatTitleData = computed(() => store.state.chat.titleData);
  const updateChatTarget = (target: string) =>
    store.commit('chat/SET_CHAT_TARGET', target);
  const updateChatTitleData = (data: object) =>
    store.commit('chat/SET_CHAT_TITLEDATA', data);

  return {
    chatTarget,
    updateChatTarget,
    chatTitleData,
    updateChatTitleData,
  };
};
