<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <Navigation></Navigation>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/Header.vue';
import Navigation from '@/components/common/Navigation.vue';
export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    Navigation,
  },
});
</script>

<style>
#app {
  font-family: '돋움', dotum, Gulim, Helvetica, Sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-contents {
  padding: 1rem 23rem 0 23rem;
}
</style>
