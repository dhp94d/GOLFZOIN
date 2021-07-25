import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
  const store = useStore();
  const AuthUser = computed(() => store.state.auth.user);
  const AuthToken = computed(() => store.state.auth.token);

  return {
    AuthUser,
    AuthToken,
  };
};
