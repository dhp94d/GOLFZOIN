<template>
  <div class="chat-view">
    <Message :messages="messageData"></Message>
    <div class="chat-submit">
      <form @submit.prevent="addMessage">
        <input type="text" name="new-message" v-model="newMessage" />
      </form>
    </div>
  </div>
</template>

<script lnag="ts">
import Message from '@/components/user/Message.vue';
import { useChat } from '@/composable/chat';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Message },
  setup() {
    const { ChatTarget } = useChat();
    console.log(ChatTarget);
  },
});
</script>

<style scoped>
.chat-room-container {
  display: block;
  position: fixed;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: block;
}
.chat-submit {
  display: block;
  position: absolute;
  text-align: center;
  width: 60%;
  padding-bottom: 3rem;
  bottom: 0;
}

.chat-submit input {
  width: 98%;
  height: 5rem;
  border-radius: 8px;
}
.chat-submit button {
  width: 10%;
}
</style>
