<template>
  <div>
    <div class="header-contianer">
      <Header></Header>
      <div class="Banner-contianer">
        <Banner></Banner>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Banner from '@/components/main/Banner.vue';

export default {
  components: {
    Header,
    Banner,
  },
};
</script>

<style scoped>
.header-contianer {
  width: 100%;
  height: 100%;
  background-image: url('../assets/background.jpg');
  background-size: cover;
}
.Banner-contianer {
  display: block;
  position: relative;
  bottom: 0;
  background-color: white;
}
</style>
