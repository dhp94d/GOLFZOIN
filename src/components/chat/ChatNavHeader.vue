<template>
  <div class="chat-sidebar-header">
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { getUserFromCookie } from '@/composable/cookies';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const name = ref('');

    onMounted(() => {
      name.value = JSON.parse(getUserFromCookie()).name;
    });
    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoprd>
.chat-sidebar-header {
  position: relative;
  display: flex;
  height: 64px;
  min-height: 64px;
  border-bottom: 1px solid $gray;
  padding: 0px 20px;
  -webkit-box-align: center;
  align-items: center;
  div {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
  }
}
</style>
