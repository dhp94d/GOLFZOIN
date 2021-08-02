<template>
  <div>{{ onlineJoinLen }}개 이상의 조인</div>
</template>

<script>
import { useJoin } from '@/composable/join';
export default {
  setup() {
    const { onlineJoinLen, offlineJoinLen } = useJoin();
    return {
      onlineJoinLen,
      offlineJoinLen,
    };
  },
};
</script>

<style></style>
