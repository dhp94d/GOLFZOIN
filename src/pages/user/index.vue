<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const TAPS = [
  { title: '팔로우', link: '/user/follow' },
  { title: '대화', link: '/user/chatpage' },
  { title: '알림', link: '/user/notification' },
];
export default defineComponent({
  components: {},
  setup() {
    return {
      TAPS,
    };
  },
});
</script>

<style></style>
