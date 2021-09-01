<template>
  <div class="chat-nav-container">
    <div v-for="join in joinList" :key="join.roomNo">
      <li>
        <div
          class="chat-nav-room"
          @click="
            enterChatRoom(join.roomNo, {
              title: join.title,
              thumbnail: join.thumbnail,
            })
          "
        >
          <div class="chat-nav-room-profile">
            <img class="profile-image" :src="join.thumbnail" alt="profile" />
          </div>
          <div class="chat-nav-room-body">
            <div class="preview-title-wrap">
              <span class="nickname">{{ join.title }}</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { getAuthFromCookie } from '@/composable/cookies';
import { mwMyJoinList } from '@/api/middleware/mainJoin';
import { useChat } from '@/composable/chat';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const joinList = ref([]);
    const { updateChatTarget, updateChatTitleData } = useChat();

    const getJoinList = async () => {
      joinList.value = await mwMyJoinList(
        process.env.VUE_APP_SERVER_TYPE,
        getAuthFromCookie()
      );
    };
    const enterChatRoom = (roomNo, titleData) => {
      updateChatTarget(roomNo);
      updateChatTitleData(titleData);
    };
    onMounted(() => {
      getJoinList();
    });

    return {
      joinList,
      enterChatRoom,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-nav-container {
  height: 77vh;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  div {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
}
.chat-nav-room {
  display: flex;
  padding: 16px;
  height: 72px;
  border-bottom: 1px solid var(--divider-line);
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: perspective(1px) translateZ(0px);
  transition: color 0.5s ease 0s;
  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0px;
    background-color: rgb(242, 243, 246);
    transform: scale(0);
    transition-property: transform;
    transition-duration: 0.5s;
  }
}
.chat-nav-room-profile {
  margin-right: 8px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.chat-nav-room-body {
  flex: 1 0 0%;
  width: 0px;
}
.preview-title-wrap {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .nickname {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 20px;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: -0.02em;
    color: #212124;
  }
}
@media (max-width: 1400px) {
  .chat-nav-room-profile {
    padding: 8px;
    height: 72px;
  }
  .chat-nav-room-body {
    font-size: 5rem;
    height: 50px;
  }
  .nickname {
    display: none;
  }
  .chat-nav-room {
    padding: 0;
  }
  .preview-title-wrap {
    display: none;
  }
}
</style>
