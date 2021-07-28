<template>
  <div class="banner">
    <div class="banner-title">
      <div>프로골퍼 / 인플루언서들과 함께하는 온라인 조인</div>
      <button>지금 둘러보기</button>
    </div>
    <div></div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const index = ref(5);
    return {
      index,
    };
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-content: center;
  font-size: 4rem;
  padding: 0 14rem 18rem 14rem;
}
.banner-title {
  display: block;
  width: 30%;
  color: #e0e0e0;
}
.banner-title button {
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
}
</style>
