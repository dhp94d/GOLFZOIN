<template>
  <div>
    <SubHeader></SubHeader>
    <div class="chat-container">
      <div class="chat-Frame">
        <div class="chat-sidebar">
          <ChatSidebar></ChatSidebar>
        </div>
        <div class="chat-nav">
          <Chatnav></Chatnav>
        </div>
        <div class="chat-room">
          <ChatRoom></ChatRoom>
        </div>
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

<style lang="scss" scoped>
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

@media (max-width: 1400px) {
  .chat-sidebar {
    display: none;
  }
  .chat-nav {
    width: 25vw;
  }
  .chat-room {
    width: 80vw;
    height: 80vh;
  }
}
</style>
