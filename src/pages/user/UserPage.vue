<template>
  <div>
    <SubHeader></SubHeader>
    <div class="user-container">
      <div class="user-Frame">
        <UserSidebar></UserSidebar>
        <UserTap></UserTap>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/common/SubHeader.vue';
import UserSidebar from '@/components/user/UserSidevar.vue';
import UserTap from '@/components/user/UserTap.vue';
export default {
  components: {
    UserTap,
    SubHeader,
    UserSidebar,
  },
};
</script>

<style scope>
.user-container {
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
  margin: auto;
  color: var(--default-font-color);
  letter-spacing: -0.02em;
  background: rgb(242, 243, 246);
}
.user-Frame {
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: space-between;
}
</style>
