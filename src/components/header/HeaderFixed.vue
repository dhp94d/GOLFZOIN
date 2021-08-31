<template>
  <div class="header-fixed-container">
    <div class="header-logo">
      <HeaderLogo></HeaderLogo>
    </div>
    <div class="fixed-toggle" style="padding-top: 1rem">
      <HeaderNavTap :navColor="'#4b4b4b'" :hoverColor="'black'"></HeaderNavTap>
    </div>
    <div class="icon-position">
      <HeaderUserIcon></HeaderUserIcon>
    </div>
  </div>
</template>

<script>
import HeaderUserIcon from '@/components/header/HeaderUserIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';
import HeaderNavTap from '@/components/header/HeaderNavTap.vue';
export default {
  components: {
    HeaderLogo,
    HeaderUserIcon,
    HeaderNavTap,
  },
};
</script>

<style lang="scss" scoped>
.header-fixed-container {
  display: flex;
  position: fixed;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  top: 0;
  z-index: 1;
  padding: 1rem 10rem;
  -webkit-box-shadow: 0 0.5rem 0.5rem -0.5rem #000000;
  -moz-box-shadow: 0 0.5rem 0.5rem -0.5rem #000000;
  box-shadow: 0 0.5rem 0.5rem -0.5rem #000000;
}
@media (max-width: 1400px) {
  .header-fixed-container {
    position: fixed;
    top: 0;
    padding: 0;
    /* width: 100% */
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
  }
  .fixed-toggle {
    display: none;
  }
  .icon-position {
    display: none;
    position: absolute;
    margin-right: 1rem;
    right: 0;
  }
  .icon-position {
    display: none;
  }
  .header-logo {
    justify-content: center;
    align-content: center;
    text-align: center;
  }
}
</style>
