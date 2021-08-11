<template>
  <div>
    <div>
      <SubHeader></SubHeader>
    </div>
    <div class="auth-container">
      <div class="auth-page">
        <h3 class="page-header">로그인</h3>
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoginForm from '@/components/auth/LoginForm.vue';
import SubHeader from '@/components/common/SubHeader.vue';

export default defineComponent({
  components: {
    LoginForm,
    SubHeader,
  },
});
</script>

<style>
.auth-container {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
