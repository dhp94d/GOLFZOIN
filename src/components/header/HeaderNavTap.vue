<template>
  <div class="header-nav-tap">
    <router-link to="/join/onlinejoin">
      <span>온라인 조인</span>
    </router-link>
    <router-link to="/join/offlinejoin">
      <span>오프라인 조인</span>
    </router-link>
    <router-link to="/join/makejoin">
      <span>조인 만들기</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-nav {
  display: block;
  flex-shrink: 1;
  flex-grow: 0;
  min-width: 348px;
  height: 100%;
  text-align: center;
  text-size-adjust: 100%;
  padding-top: 2rem;
  width: 35%;
}
.header-nav-tap {
  padding-bottom: 3rem;
}
.header-nav-tap span {
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0.8rem 1.2rem;
}
.header-nav a {
  text-decoration: none;
}
</style>
