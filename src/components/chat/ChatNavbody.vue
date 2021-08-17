<template>
  <ul class="chat-body-header">
    <ChatNavBodyList></ChatNavBodyList>
    <div class="footer"></div>
  </ul>
</template>

<script>
import ChatNavBodyList from '@/components/chat/ChatNavBodyList.vue';
export default {
  components: {
    ChatNavBodyList,
  },
};
</script>

<style lang="scss" scoprd>
.chat-body-header {
  position: relative;
  height: calc(100% - 56px);
  list-style: none;
  overflow: hidden auto;
  background-color: #fff;
  list-style: none;
  padding: 0px;
  list-style-type: disc;
}
.footer {
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(33, 33, 36, 0.07);
  height: 56px;
  min-height: 56px;
  width: 100%;
}
</style>
