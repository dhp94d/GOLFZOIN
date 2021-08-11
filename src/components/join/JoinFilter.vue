<template>
  <div class="join-filter-container">
    <button>전체</button>
    <button>인플루언서</button>
    <button>날짜</button>
    <button>인원</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.join-filter-container {
  display: flex;
}
.join-filter-container button {
  font-size: 0.9rem;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 0.4rem 0.6rem;
  margin-right: 0.5rem;
  &:active {
    box-shadow: 1px 1px 0 black;
    position: relative;
    top: 2px;
  }
}
</style>
