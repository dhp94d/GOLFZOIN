<template>
  <div class="chat-list">
    <div
      class="chat-card"
      v-for="chat in chatData"
      :key="chat.id"
      @click="onClick(chat.id)"
    >
      <div class="chat-header">
        <div>
          <span>{{ chat.title }}</span>
          <span class="chat-len">{{ chat.len === 1 ? '' : chat.len }}</span>
        </div>
        <p style="color: gray; font-size: 0.8rem">
          {{ chat.data[chat.len - 1].timestamp }}
        </p>
      </div>
      <div class="chat-last-messsage">
        {{ chat.data[chat.len - 1].content }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Message from '@/components/user/Message.vue';
import axios from 'axios';
import { useStore } from 'vuex';
export default defineComponent({
  //   components: {
  //     Message,
  //   },
  props: {
    chatData: Array,
  },
  setup(props) {
    const store = useStore();
    const messageData = ref([]);
    const newMessage = ref('');
    const onClick = (id) => {
      store.commit('chat/UPDATE_CHAT_TARGET', id);
      messageData.value = [];
      messageData.value.push(
        ...props.chatData.filter((v) => v.id === id)[0].data
      );
    };
    const addMessage = async () => {};
    return {
      onClick,
      messageData,
      newMessage,
      addMessage,
    };
  },
});
</script>

<style scoped>
.chat-list {
  display: block;
  position: fixed;
  padding: 1rem;
  border: 1px solid #ebebeb;
  height: auto;
  font-size: 1.5rem;
  font-weight: bold;
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
.chat-header p {
  margin-top: 0.4rem;
}
.chat-header {
  display: flex;
  justify-content: space-between;
}
.chat-len {
  padding-left: 0.5rem;
  color: gray;
}
.chat-last-messsage {
  font-weight: 400;
  font-size: 1.2rem;
  text-align: right;
}
.chat-card {
  margin-bottom: 1rem;
  padding: 1rem;
}
.chat-card:hover {
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f4f4f4;
  z-index: -10;
}
</style>
