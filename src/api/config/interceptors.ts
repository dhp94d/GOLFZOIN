import { useStore } from 'vuex';
import { getAuthFromCookie } from '@/composable/cookies';

function setInterceptors(instance: any) {
  console.log('너가 문제?');
  const store = useStore();
  instance.interceptors.request.use(
    (config: any) => {
      config.headers.Authorization =
        store.getters['userToken'] || getAuthFromCookie();
      return config;
    },
    (error: any) => Promise.reject(error.response)
  );
  instance.interceptors.response.use(
    (config: any) => config,
    (error: any) => Promise.reject(error.response)
  );
  return instance;
}

export { setInterceptors };
