<template>
  <div>
    <div class="chat-box" v-for="message in messages" :key="message.id">
      <div class="name">{{ message.name }}</div>
      <div class="chat-data">
        <div class="text">{{ message.content }}</div>
        <p>{{ message.timestamp }}</p>
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

<style scoped></style>
