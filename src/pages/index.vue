<template>
  <div class="main-page">
    <div class="header-contianer">
      <div>
        <HeaderMain class="header-web"></HeaderMain>
        <HeaderFixed class="header-mobile"></HeaderFixed>
      </div>
      <div>
        <Banner></Banner>
      </div>
    </div>
    <div class="main-join-container">
      <div>
        <MainOnline></MainOnline>
      </div>
      <div>
        <MainOffline></MainOffline>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/main/Banner.vue';
import MainOnline from '@/components/main/mainOnline.vue';
import MainOffline from '@/components/main/mainOffline.vue';
import HeaderMain from '@/components/header/HeaderMain.vue';
import HeaderFixed from '@/components/header/HeaderFixed.vue';
export default {
  components: {
    Banner,
    MainOnline,
    MainOffline,
    HeaderMain,
    HeaderFixed,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.header-mobile {
  display: none;
}
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
  object-fit: cover;
}
.Banner-contianer {
  display: block;
  margin-top: 8rem;
}
.main-join-container {
  padding: 3rem 10rem;
}

@media (max-width: 1400px) {
  .main-join-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 02rem;
    margin-top: 5rem;
  }
  .header-web {
    display: none;
  }
  .header-mobile {
    display: block;
  }
}
</style>
