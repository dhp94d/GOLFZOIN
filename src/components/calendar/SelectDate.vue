<template>
  <div class="calendar-date-container">
    <button @click="decrementMonth">&lt;</button>
    <div>&nbsp;{{ calendarYear }}-{{ calendarMonth }}&nbsp;</div>
    <button @click="incrementMonth">&gt;</button>
  </div>
</template>

<script>
import { useCalendar } from '@/composable/calendar';
import dayjs from 'dayjs';
export default {
  setup() {
    const { calendarMonth, calendarYear, incrementMonth, decrementMonth } =
      useCalendar();
    return {
      calendarMonth,
      calendarYear,
      incrementMonth,
      decrementMonth,
    };
  },
};
</script>

<style lang="scss" scoped>
.calendar-date-container {
  display: flex;
  padding: 1rem;
  div {
    font-size: 1.3rem;
    font-weight: bold;
  }
  button {
    font-size: 1rem;
    border: 0;
    background-color: white;
  }
}
</style>
