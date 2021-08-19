<template>
  <div class="banner">
    <div class="banner-title">
      <div>프로골퍼 / 인플루언서들과 함께하는 온라인 조인</div>
      <router-link to="/join/onlinejoin">
        <button>지금 둘러보기</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.banner {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-content: center;
  font-size: 3rem;
  padding: 10rem 10rem 1rem 10rem;
}
.banner-title {
  display: block;
  width: 30%;
  color: #e0e0e0;
}
.banner-title button {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
}
@media (max-width: 1400px) {
  .banner {
    display: none;
  }
}
</style>
