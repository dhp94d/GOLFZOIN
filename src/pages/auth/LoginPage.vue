<template>
  <div class="auth-page">
    <h3 class="page-header">로그인 페이지</h3>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoginForm from '@/components/auth/LoginForm.vue';

export default defineComponent({
  components: {
    LoginForm,
  },
});
</script>

<style></style>
