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
import { computed, defineComponent, ref } from 'vue';
import axios from 'axios';
import SubHeader from '@/components/common/SubHeader.vue';
import ChatSidebar from '@/components/chat/ChatSidebar.vue';
import Chatnav from '@/components/chat/ChatNav.vue';
import ChatRoom from '@/components/chat/ChatRoom.vue';
import { useChat } from '@/composable/chat';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    SubHeader,
    ChatSidebar,
    Chatnav,
    ChatRoom,
  },
  setup() {
    const store = useStore();
    const { ChatTarget } = useChat();
    const chatType = ref(true);
    const basicData = ref([]);
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/chat`);
      basicData.value = res.data;
    };
    const chatRoomData = computed(
      () =>
        basicData.value.filter((v) => v.id === store.state.chat.target)[0]?.data
    );
    console.log(chatRoomData);
    getData();
    return {
      chatType,
      basicData,
      ChatTarget,
      chatRoomData,
    };
  },
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
  justify-content: space-between;
}
</style>
