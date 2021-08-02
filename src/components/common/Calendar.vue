<template>
  <div>캘린더</div>
</template>

<script>
import getDayMatrix from '@/composable/calendar';
export default {
  setup() {
    console.log(getDayMatrix(2021, 8));
  },
};
</script>

<style></style>
