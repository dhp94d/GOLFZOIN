<template>
  <div>
    <SubHeader></SubHeader>
    <div class="chat-Frame">
      <div class="chat-list">
        <ChatHeader></ChatHeader>
        <ChatList :chatData="basicData"></ChatList>
      </div>
      <div class="chat-room">
        <ChatRoom :chatData="chatRoomData"></ChatRoom>
      </div>
      <div class="chat-tool">
        <ChatTool></ChatTool>
        <ChatToolList></ChatToolList>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import axios from 'axios';
import SubHeader from '@/components/common/SubHeader.vue';
import ChatList from '@/components/user/ChatList.vue';
import ChatHeader from '@/components/user/ChatHeader.vue';
import ChatRoom from '@/components/user/ChatRoom.vue';
import ChatTool from '@/components/user/ChatTool.vue';
import ChatToolList from '@/components/user/ChatToolList.vue';
import { useChat } from '@/composable/chat';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    SubHeader,
    ChatList,
    ChatHeader,
    ChatRoom,
    ChatTool,
    ChatToolList,
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
.chat-Frame {
  display: flex;
  justify-content: space-between;
}
.chat-list {
  display: block;
  width: 20%;
}
.chat-room {
  display: block;
  width: 60%;
}
.chat-tool {
  display: block;
  width: 20%;
}
</style>
