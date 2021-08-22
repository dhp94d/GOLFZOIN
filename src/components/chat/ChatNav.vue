<template>
  <div class="chat-nav-container">
    <ChatNavHeader></ChatNavHeader>
    <ChatNavBody></ChatNavBody>
  </div>
</template>

<script>
import ChatNavHeader from '@/components/chat/ChatNavHeader.vue';
import ChatNavBody from '@/components/chat/ChatNavbody.vue';
export default {
  components: {
    ChatNavHeader,
    ChatNavBody,
  },
};
</script>

<style lang="scss" scpoed>
.chat-nav-container {
  display: flex;
  border-right: 1px solid rgba(33, 33, 36, 0.07);
  width: 16vw;
  min-width: 16vw;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}
</style>
