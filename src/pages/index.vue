<template>
  <div>
    <div class="header-page">
      <Header></Header>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.header-page {
  width: 100%;
  height: 75rem;
  background-image: url('../assets/background.jpg');
  background-size: cover;
}
</style>
