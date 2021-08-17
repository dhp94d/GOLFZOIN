<template>
  <section class="chat-room-container">
    <div class="chat-room-wrap">
      <ChatRoomHeader></ChatRoomHeader>
      <ChatRoombody></ChatRoombody>
      <div class="chat-roomg-bottom">
        <ChatRoomMessage></ChatRoomMessage>
      </div>
    </div>
  </section>
</template>

<script>
import ChatRoomHeader from '@/components/chat/ChatRoomHeader.vue';
import ChatRoombody from '@/components/chat/ChatRoomBody.vue';
import ChatRoomMessage from '@/components/chat/ChatRoomMessage.vue';
export default {
  components: {
    ChatRoomHeader,
    ChatRoombody,
    ChatRoomMessage,
  },
};
</script>

<style lang="scss" scoped>
.chat-room-container {
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(33, 33, 36, 0.14);
  min-width: 812px;
  max-width: 812px;
  background-color: rgb(255, 255, 255);
}
.chat-room-wrap {
  position: relative;
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  overflow: hidden;
}
.chat-roomg-bottom {
  margin: auto 0 0 0;
}
</style>
