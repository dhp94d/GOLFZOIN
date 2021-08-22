import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
  const store = useStore();
  const authGetUserInfo = computed(() => store.state.auth.user);
  const authGetUserId = computed(() => store.getters['auth/getUser']);
  const authLogout = () => store.commit('auth/LOGOUT');
  const authSetUser = (data: object) => store.commit('auth/SET_USER', data);
  const authLoginAction = () => store.dispatch('auth/LOGIN');
  const authIsLoggedIn = computed(() => store.getters['auth/isLoggedIn']);

  return {
    authGetUserInfo,
    authGetUserId,
    authLogout,
    authSetUser,
    authLoginAction,
    authIsLoggedIn,
  };
};
