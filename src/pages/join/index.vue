<template>
  <div>
    <SubHeader></SubHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import SubHeader from '@/components/common/SubHeader.vue';
export default {
  components: {
    SubHeader,
  },
};
</script>

<style scoped>
.make-join-body {
  border: 0.5px solid rgb(161, 161, 161);
  z-index: 2;
}
</style>
