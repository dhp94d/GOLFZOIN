<template>
  <div class="layout">
    <UserNav></UserNav>
    <Chat></Chat>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserNav from '@/components/user/UserNav.vue';
import Chat from '@/components/user/Chat.vue';

export default defineComponent({
  components: {
    UserNav,
    Chat,
  },
});
</script>

<style>
.layout {
  padding-top: 3rem;
}
</style>
