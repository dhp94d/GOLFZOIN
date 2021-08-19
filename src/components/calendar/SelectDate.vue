<template>
  <div class="calendar-date-container">
    <button>&lt;</button>
    <div>&nbsp;2021-12&nbsp;</div>
    <button>&gt;</button>
  </div>
</template>

<script>
export default {};
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
