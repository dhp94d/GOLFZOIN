<template>
  <div class="header">
    <div class="header-logo">
      <HeaderLogo></HeaderLogo>
      <HeaderUserIcon></HeaderUserIcon>
    </div>
    <div class="header-nav">
      <div class="header-nav-tap">
        <HeaderNavTap
          :navColor="'#efefef'"
          :hoverColor="'white'"
        ></HeaderNavTap>
      </div>
      <div class="header-nav-search">
        <HeaderSearchBar></HeaderSearchBar>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderNavTap from '@/components/header/HeaderNavTap.vue';
import HeaderSearchBar from '@/components/header/HeaderSearchBar.vue';
import HeaderUserIcon from '@/components/header/HeaderUserIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';

export default defineComponent({
  components: {
    HeaderSearchBar,
    HeaderNavTap,
    HeaderUserIcon,
    HeaderLogo,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.header {
  padding: 2rem 10rem;
}
.header-logo {
  display: flex;
  justify-content: space-between;
}
.header-nav-tap {
  text-align: center;
}
.header-nav-search {
  padding: 0 20rem;
}
@media (max-width: 1400px) {
  .header-nav-search {
    padding: 0;
  }
}
</style>
