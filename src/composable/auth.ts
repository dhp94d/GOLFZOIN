import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
  const store = useStore();
  const AuthEmail = computed(() => store.state.auth.email);
  const AuthPassword = computed(() => store.state.auth.password);
  const AuthName = computed(() => store.state.auth.name);
  const AuthNickname = computed(() => store.state.auth.nickname);
  const AuthBirtyday = computed(() => store.state.auth.birtyday);
  const AuthPhoneNumber = computed(() => store.state.auth.phoneNumber);
  const AuthAddress = computed(() => store.state.auth.address);
  const AuthHit = computed(() => store.state.auth.hit);

  return {
    AuthEmail,
    AuthPassword,
    AuthName,
    AuthNickname,
    AuthBirtyday,
    AuthPhoneNumber,
    AuthAddress,
    AuthHit,
  };
};
