<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  height: 100%;
}
</style>
