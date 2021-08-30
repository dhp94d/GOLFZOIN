import store from '@/store';

function setInterceptors(instance: any) {
  instance.interceptors.request.use(
    (config: any) => {
      store.commit('loading/startSpinner');
      return config;
    },
    (error: any) => {
      alert('데이터 요청 실패');
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: any) => {
      store.commit('loading/endSpinner');
      return response;
    },
    (error: any) => {
      alert('데이터 응답 실패');
      return Promise.reject(error);
    }
  );
  return instance;
}

export { setInterceptors };
