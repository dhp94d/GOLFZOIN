<template>
  <header class="header">
    <div>
      <router-link to="/">
        <img src="../../../public/logo.png" />
      </router-link>
    </div>
    <div class="user_nav">
      <!-- 1 -->
      <template v-if="AuthEmail">
        <i class="fas fa-user fa-2x"></i>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuth } from '@/composable/auth';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const { AuthEmail }: any = useAuth();
    const user = ref(localStorage.getItem('user'));
    if (user) {
      store.commit('auth/UPDATE_AUTH_EMAIL', user);
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
  position: sticky;
  width: 100%;
  height: 7rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 22rem 0 22rem;
  margin-bottom: 3rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
  z-index: 10;
}
.user_nav {
  text-align: center;
  align-items: center;
  margin-top: 2rem;
}
.user_nav a {
  margin-left: 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: gray;
  font-weight: bold;
}
</style>
