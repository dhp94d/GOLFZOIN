<template>
  <div class="join-filter-container">
    <button class="btn btn-default" type="submit">전체</button>
    <button class="btn btn-default" type="submit">인플루언서</button>
    <button class="btn btn-default" type="submit">날짜</button>
    <button class="btn btn-default" type="submit">인원</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.join-filter-container {
  display: flex;
}
.join-filter-container button {
  font-size: 0.9rem;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 0.4rem 0.6rem;
  margin-right: 0.5rem;
}
</style>
