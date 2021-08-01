<template>
  <div class="number-updown-container">
    <div class="number-updown-mutation">&lt;</div>
    <input class="number-updown-view" type="text" />
    <div class="number-updown-mutation">&gt;</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.number-updown-container {
  display: flex;
}
.number-updown-mutation {
  padding: 0 1rem;
}
.number-updown-view {
  border: 0;
  width: 5rem;
  text-align: center;
}
</style>
