<template>
  <div>
    <SubHeader class="header-web"></SubHeader>
    <HeaderFixed class="header-mobile"></HeaderFixed>
    <div class="join-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/common/SubHeader.vue';
import HeaderFixed from '@/components/header/HeaderFixed.vue';
export default {
  components: {
    SubHeader,
    HeaderFixed,
  },
};
</script>

<style scoped>
.header-mobile {
  display: none;
}
.make-join-body {
  border: 0.5px solid rgb(161, 161, 161);
  z-index: 2;
}
@media (max-width: 1400px) {
  .header-web {
    display: none;
  }
  .header-mobile {
    display: block;
  }
  .join-body {
    padding-top: 5rem;
  }
}
</style>
