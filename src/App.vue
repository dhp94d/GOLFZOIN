<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useAuth } from '@/composable/auth';
export default defineComponent({
  name: 'App',
  setup() {
    const { authLoginAction } = useAuth();

    const init = () => {
      let stripeScript = document.createElement('script');
      stripeScript.setAttribute('type', 'text/javascript');
      stripeScript.setAttribute(
        'src',
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=15ac0683efa77658fcfebb90ca8d1bc4&libraries=services'
      );
      console.log(document.head);

      document.head.appendChild(stripeScript);
    };
    init();
    onMounted(() => {
      authLoginAction();
    });
  },
});
</script>

<style lang="scss">
/* 반응형 최대크기 */
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans KR', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  margin: 0 auto;
  font-size: 14px;
  width: 100%;
  min-height: 100%;
  border-left: 1px #d8d8d8 solid;
  border-right: 1px #d8d8d8 solid;
  position: relative;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;
  letter-spacing: -0.02em;
  color: #484848;
  overflow: overlay;
  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 100px;
  }
}
@media (max-width: 1400px) {
  #app {
    width: 100%;
    border-left: 0;
    border-right: 0;
  }
}
</style>
