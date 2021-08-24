<template>
  <section class="chat-room-container">
    <ChatRoomHeader></ChatRoomHeader>
    <div class="chat-room-wrap">
      <ChatRoombody :chatData="chatData"></ChatRoombody>
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
import { mwEnterChatRoom } from '@/api/middleware/chat';
import { useChat } from '@/composable/chat';
import { watch, ref } from 'vue';
export default {
  components: {
    ChatRoomHeader,
    ChatRoombody,
    ChatRoomMessage,
  },
  setup() {
    const chatData = ref([]);
    const { chatTarget } = useChat();

    const getChatData = async () => {
      chatData.value = [];
      const res = await mwEnterChatRoom(
        process.env.VUE_APP_SERVER_TYPE,
        chatTarget.value
      );
      res.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == 'added') {
            let doc = change.doc;
            const data = {
              id: doc.id,
              author: doc.data().author,
              data: doc.data().data,
              date: doc.data().date,
              profile: doc.data().profile,
              roomNo: doc.data().roomNo,
            };
            chatData.value.push(data);
          }
        });
      });
    };

    watch(chatTarget, () => getChatData());

    return {
      chatData,
    };
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
