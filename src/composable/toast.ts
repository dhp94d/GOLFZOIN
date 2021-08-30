import { ref, onUnmounted } from 'vue';
export const useToast = () => {
  const toastMessage = ref('');
  const toastAlertType = ref('');
  const showToast = ref(false);
  const timeout = ref();
  const triggerToast = (message: string, type = 'success') => {
    console.log('넘어왔냐');
    toastMessage.value = message;
    toastAlertType.value = type;
    showToast.value = true;
  };

  onUnmounted(() => {
    clearTimeout(timeout.value);
  });
  return {
    toastMessage,
    toastAlertType,
    showToast,
    triggerToast,
  };
};
