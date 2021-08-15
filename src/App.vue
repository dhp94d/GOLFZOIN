<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { isLoggedin } from '@/middleware/auth';
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => isLoggedin('firebase'));
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

/* 반응형 최대크기 */
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}
@media (max-width: 1400px) {
  #app {
    width: 100%;
    border-left: 0;
    border-right: 0;
  }
}
</style>
