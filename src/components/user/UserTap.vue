<template>
  <div class="user-nav-container">
    <UserTapHeader></UserTapHeader>
    <UserTapBody></UserTapBody>
  </div>
</template>

<script>
import UserTapHeader from '@/components/user/UserTapHeader.vue';
import UserTapBody from '@/components/user/UserTapBody.vue';
export default {
  components: {
    UserTapHeader,
    UserTapBody,
  },
};
</script>

<style lang="scss" scpoed>
.user-nav-container {
  height: 90vh;
  width: 30vw;
  display: flex;
  border-right: 1px solid rgba(33, 33, 36, 0.07);
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}
</style>
