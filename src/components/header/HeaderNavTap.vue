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
export default {
  props: {
    navColor: String,
    hoverColor: String,
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  height: 100%;
  text-size-adjust: 100%;
  width: 35%;
}
.header-nav-tap {
  padding-bottom: 1rem;
  span {
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 0 1.2rem;
    color: v-bind(navColor);
    &:hover {
      color: v-bind(hoverColor);
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
