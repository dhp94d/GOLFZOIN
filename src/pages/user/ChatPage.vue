<template>
  <div>
    <SubHeader></SubHeader>
    <div class="chat-container">
      <div class="chat-Frame">
        <ChatSidebar></ChatSidebar>
        <Chatnav></Chatnav>
        <ChatRoom></ChatRoom>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SubHeader from '@/components/common/SubHeader.vue';
import ChatSidebar from '@/components/chat/ChatSidebar.vue';
import Chatnav from '@/components/chat/ChatNav.vue';
import ChatRoom from '@/components/chat/ChatRoom.vue';

export default defineComponent({
  components: {
    SubHeader,
    ChatSidebar,
    Chatnav,
    ChatRoom,
  },
  setup() {},
});
</script>

<style scope>
.chat-container {
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
  margin: auto;
  color: var(--default-font-color);
  letter-spacing: -0.02em;
  background: rgb(242, 243, 246);
}
.chat-Frame {
  display: flex;
  object-fit: cover;
  justify-content: space-between;
}
</style>
