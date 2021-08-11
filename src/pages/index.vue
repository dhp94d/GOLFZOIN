<template>
  <div class="main-page">
    <div class="header-contianer">
      <div>
        <Header></Header>
      </div>
      <div>
        <Banner></Banner>
      </div>
    </div>
    <div class="main-join">
      <MainOnline></MainOnline>
    </div>
    <div class="main-join">
      <MainOffline></MainOffline>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Banner from '@/components/main/Banner.vue';
import MainOnline from '@/components/main/mainOnline.vue';
import MainOffline from '@/components/main/mainOffline.vue';
export default {
  components: {
    Header,
    Banner,
    MainOnline,
    MainOffline,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}
.header-contianer {
  width: 100%;
  height: 100%;
  background-image: url('../assets/background.jpg');
  background-size: cover;
}
.Banner-contianer {
  display: block;
  margin-top: 8rem;
}
.main-join {
  padding: 3rem 10rem;
}
</style>
