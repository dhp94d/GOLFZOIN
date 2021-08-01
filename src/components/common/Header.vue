<template>
  <div class="header">
    <div class="header-logo">
      <HeaderLogo></HeaderLogo>
    </div>
    <div class="header-nav">
      <HeaderNavTap></HeaderNavTap>
      <HeaderSearchBar></HeaderSearchBar>
    </div>
    <div style="width: 8%">
      <HeaderUserIcon></HeaderUserIcon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuth } from '@/composable/auth';
import { useStore } from 'vuex';
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
    const store = useStore();
    const { AuthEmail }: any = useAuth();
    const user = ref(localStorage.getItem('user'));
    if (user) {
      store.commit('auth/SET_TOKEN', user);
    }
    return {
      AuthEmail,
    };
  },
});
</script>
<style scoped>
.header {
  display: flex;
  position: relative;
  justify-content: space-between;
  min-width: 348px;
  box-sizing: border-box;
  padding: 2rem 10rem 3rem 10rem;
  line-height: 1.5rem;
  max-width: 100%;
  z-index: 1;
}
.header-nav {
  display: block;
  flex-shrink: 1;
  flex-grow: 0;
  min-width: 348px;
  text-align: center;
  text-size-adjust: 100%;
  padding-top: 2rem;
  width: 35%;
}
</style>
