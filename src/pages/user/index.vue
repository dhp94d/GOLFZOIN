<template>
  <div>
    <SubHeader></SubHeader>
    <div class="user-container">
      <router-view></router-view>
    </div>
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

<style lang="scss" scoped>
.user-container {
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
  margin: auto;
  color: var(--default-font-color);
  letter-spacing: -0.02em;
  background: rgb(242, 243, 246);
  height: 90vh;
}
</style>
