<template>
  <div class="header-fixed-container">
    <HeaderLogo></HeaderLogo>
    <div class="fixed-toggle" style="padding-top: 1rem">
      <HeaderNavTap :navColor="'#4b4b4b'" :hoverColor="'black'"></HeaderNavTap>
    </div>
    <div class="icon-position">
      <HeaderUserIcon></HeaderUserIcon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderUserIcon from '@/components/header/HeaderUserIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';
import HeaderNavTap from '@/components/header/HeaderNavTap.vue';

export default defineComponent({
  components: {
    HeaderUserIcon,
    HeaderLogo,
    HeaderNavTap,
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
.header-fixed-container {
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 10vh;
  padding: 1rem 10rem;
  border-bottom: 1px solid gray;
  z-index: 10;
}
@media (max-width: 1400px) {
  .header-fixed-container {
    display: flex;
    position: static;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  .fixed-toggle {
    display: none;
  }
  .icon-position {
    position: absolute;
    margin-right: 1rem;
    right: 0;
  }
}
</style>
