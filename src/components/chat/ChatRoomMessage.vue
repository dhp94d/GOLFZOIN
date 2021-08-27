<template>
  <div>
    <form class="chat-message-form">
      <textarea
        @keyup.enter.prevent="addMessage"
        placeholder="메시지를 입력해주세요"
        class="chat-message-input"
        v-model="message"
      ></textarea>
      <div class="chatform-option-area">
        <button
          class="btn btn btn-primary auth-button"
          @click.prevent="addMessage"
        >
          전송
        </button>
      </div>
      <span class="text-length">0/1000</span>
    </form>
  </div>
</template>

<script>
import { watch, ref } from 'vue';
import { mwAddMessage } from '@/api/middleware/chat';
import { useAuth } from '@/composable/auth';
import { useChat } from '@/composable/chat';
import { getAuthFromCookie } from '@/composable/cookies';
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';
import dayjs from 'dayjs';
export default {
  emits: ['addChat'],
  setup(props, { emit }) {
    const message = ref('');
    const { chatTarget } = useChat();
    const { authGetUserInfo } = useAuth();

    let stompClient = null;
    const connect = async () => {
      const socket = new SockJS('http://localhost:8080/ws-stomp');
      stompClient = Stomp.over(socket);
      stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe(
          `/sub/chat/${chatTarget.value}`,
          function (roomMessage) {
            emit('addChat', roomMessage.body);
          }
        );
      });
    };
    function disconnect() {
      if (stompClient !== null) {
        stompClient.disconnect();
      }
      console.log('Disconnected');
    }

    function sendName(data) {
      stompClient.send('/pub/api/chat/message', JSON.stringify(data), {});
    }

    const addMessage = async () => {
      if (message.value === '') return;
      if (process.env.VUE_APP_SERVER_TYPE === 'serverless') {
        const messagedata = {
          roomNo: chatTarget.value,
          author: authGetUserInfo.value.nickname,
          data: message.value,
          date: dayjs(dayjs()).format('HH:mm'),
          profile: authGetUserInfo.value.profile,
        };
        await mwAddMessage(
          process.env.VUE_APP_SERVER_TYPE,
          chatTarget.value,
          messagedata
        );
      } else {
        const messageData = {
          author: authGetUserInfo.value.nickname,
          data: message.value,
          roomNo: chatTarget.value,
          date: dayjs(dayjs()).format('HH:mm'),
          profile: authGetUserInfo.value.profile,
        };
        sendName(messageData);
      }

      message.value = '';
    };

    watch(chatTarget, () => {
      disconnect(), connect();
    });
    return {
      addMessage,
      message,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-message-form {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px;
  border: 1px solid #212124;
  border-radius: 8px;
  height: 125px;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
textarea {
  overflow: auto;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.chat-message-input {
  margin: 12px 12px 0px;
  width: calc(100% - 24px);
  height: 63px;
  line-height: 150%;
  padding: 0px;
  resize: none;
  font-size: 14px;
  border: none;
  outline: none;
}
.chatform-option-area {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-end;
  margin: 8px 10px;
  box-sizing: border-box;
}

.chatform-submenu {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 12px;
}

.option-wrapper {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  svg {
    fill: rgb(134, 139, 148);
  }
}
.chat-message-button {
  background-color: #dcdee3;
  border-radius: 4px;
  width: 64px;
  height: 32px;
  line-height: 150%;
  font-weight: bold;
  font-size: 14px;
  background-color: #023e87;
  color: rgb(255, 255, 255);
  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;
  color: rgb(255, 255, 255);
}
.text-length {
  position: absolute;
  right: 84px;
  bottom: 11px;
  font-size: 12px;
  line-height: 150%;
  color: rgb(173, 177, 186);
}
</style>
