<template>
  <section class="chat-room-container">
    <ChatRoomHeader></ChatRoomHeader>
    <div class="chat-room-wrap">
      <ChatRoombody></ChatRoombody>
    </div>
    <div class="chat-roomg-bottom">
      <ChatRoomMessage></ChatRoomMessage>
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
  min-width: 50vw;
  max-width: 50vw;
  background-color: rgb(255, 255, 255);
}
.chat-room-wrap {
  position: relative;
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 100px;
  }
}
.chat-roomg-bottom {
  margin: auto 0 0 0;
}
</style>
