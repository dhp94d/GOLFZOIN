<template>
  <div>
    <div class="chat-box" v-for="message in messages" :key="message.id">
      <div class="chat-name">{{ message.name }}</div>
      <div class="chat-data">
        <div class="chat-text">{{ message.content }}</div>
        <div class="chat-time">{{ message.timestamp }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: Array,
  },
};
</script>

<style scoped>
.chat-box {
  display: block;
  padding: 1rem 1rem 0rem 1rem;
}
.chat-name {
  font-weight: 600;
  padding: 0 0.5rem 0.1rem 0.5rem;
}
.chat-text {
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.5rem;
}
.chat-data {
  display: flex;
}
.chat-time {
  position: relative;
  align-content: bottom;
  padding-top: 1rem;
  padding-left: 0.5rem;
}
</style>
