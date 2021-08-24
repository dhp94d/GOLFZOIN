<template>
  <div class="user-Frame">
    <UserSidebar :type="'alarm'"></UserSidebar>
    <div class="user-body">
      <UserTapHeader :title="'알림'"></UserTapHeader>
    </div>
  </div>
</template>

<script>
import UserSidebar from '@/components/user/UserSidevar.vue';
import UserTapHeader from '@/components/user/UserTapHeader.vue';

export default {
  components: {
    UserSidebar,
    UserTapHeader,
  },
};
</script>

<style scope>
.user-Frame {
  display: flex;
  justify-content: space-between;
}
.user-body {
  height: 83vh;
  width: 30vw;
  display: flex;
  border-right: 1px solid rgba(33, 33, 36, 0.07);
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}
</style>
