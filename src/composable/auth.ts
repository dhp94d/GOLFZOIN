import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
  const store = useStore();
  const authUser = computed(() => store.state.auth.user);
  const authToken = computed(() => store.state.auth.token);
  const authEmail = computed(() => store.state.auth.email);
  const authIsLoggedIn = computed(() => store.getters['auth/isLoggedIn']);

  const authLogout = () => store.commit('auth/LOGOUT');
  const authSetEmail = () => store.commit('auth/SET_EMAIL');

  return {
    authUser,
    authToken,
    authIsLoggedIn,
    authLogout,
    authSetEmail,
    authEmail,
  };
};
