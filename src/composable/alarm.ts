import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAlarm = () => {
  const store = useStore();
  const alarmToastMessage = computed(() => store.state.alarm.toastMessage);
  const alarmShowToast = computed(() => store.state.alarm.showToast);
  const alarmToastAlertType = computed(() => store.state.alarm.toastAlertType);
  const alarmTriggerToast = (message: string) =>
    store.commit('alarm/triggerToast', message);

  return {
    alarmToastMessage,
    alarmShowToast,
    alarmToastAlertType,
    alarmTriggerToast,
  };
};
