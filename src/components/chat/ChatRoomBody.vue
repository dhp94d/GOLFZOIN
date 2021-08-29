<template>
  <div>
    <div class="chat-room-container">
      <div class="day-divider">
        <div class="date-text">
          {{
            chatData === ''
              ? '채팅방을 클릭해 주세요.'
              : '채팅방에 오신것을 환영합니다'
          }}
        </div>
      </div>
      <div v-for="message in chatData" :key="message.id">
        <div
          id="for-scroll-1"
          :class="message.author === nickname ? 'right' : 'left'"
        >
          <div class="template-message message-form">
            <div class="chat-room-profile">
              <img class="profile-image" :src="message.profile" />
            </div>
            <div>
              <div>{{ message.author }}</div>
              <div class="chat-room-message-data">
                <div class="temp-message-wrap">
                  <div>
                    {{ message.data }}
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-room-message-time">
              <div class="message-date">
                {{ message.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserFromCookie } from '@/composable/cookies';
import { onMounted, ref } from 'vue';
export default {
  props: { chatData: Array },
  setup() {
    const nickname = ref('');

    onMounted(() => {
      nickname.value = JSON.parse(getUserFromCookie()).nickname;
    });
    return {
      nickname,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-room-container {
  display: block;
  padding: 0px 20px;
}
.day-divider {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 20px 0px;
  color: var(--grey-font-color);
  .date-text {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    border: 1px solid rgb(234, 235, 238);
    box-sizing: border-box;
    border-radius: 14px;
    padding: 0px 12px;
    font-size: 12px;
  }
}

.message-form .template-message {
  margin-bottom: 16px;
}
.chat-room-profile {
  margin-right: 8px;
  .profile-image {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
}
.chat-room-message-data {
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  width: 250px;
  font-size: 0px;
}
.temp-message-wrap {
  display: block;
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}

.chat-room-message-time {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 0px 4px;
  .message-date {
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: rgb(134, 139, 148);
  }
}
.right {
  .message-form {
    display: flex;
    justify-content: flex-end;
    padding: 4px;
  }
  .chat-room-message-data {
    background-color: blanchedalmond;
  }
}

.left {
  .message-form {
    display: flex;
    justify-content: flex-start;
    padding: 4px;
  }
}
</style>
