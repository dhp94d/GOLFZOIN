<template>
  <div>
    <SubHeader></SubHeader>
    <div class="user-contianer">
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/common/SubHeader.vue';
import UserInfo from '@/components/auth/UserInfo.vue';

export default {
  components: {
    SubHeader,
    UserInfo,
  },
};
</script>

<style scoped>
.user-contianer {
  display: flex;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  text-align: center;
  margin: auto;
}
</style>
