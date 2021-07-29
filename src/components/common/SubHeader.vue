<template>
  <div class="header">
    <div class="header-logo">
      <HeaderLogo></HeaderLogo>
    </div>
    <div style="width: 10%">
      <HeaderUserIcon></HeaderUserIcon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderUserIcon from '@/components/header/HeaderUserIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';

export default defineComponent({
  components: {
    HeaderUserIcon,
    HeaderLogo,
  },
  setup() {},
});
</script>
<style scoped>
.header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: top;
  min-width: 348px;
  box-sizing: border-box;
  padding: 1rem 20rem 5rem 20rem;
  height: 7rem;
  line-height: 1.5rem;
  max-width: 100%;
  box-shadow: 0px 0px 4px 4px #ebebeb;
  z-index: 1;
}
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
</style>
