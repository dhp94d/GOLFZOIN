<template>
  <div class="auth-page">
    <h3 class="page-header">회원가입 페이지</h3>
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SignupForm from '@/components/auth/SignupForm.vue';

export default defineComponent({
  components: {
    SignupForm,
  },
});
</script>

<style></style>
