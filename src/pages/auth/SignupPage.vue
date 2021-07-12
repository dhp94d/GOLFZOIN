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

<style>
.page-header {
  font-size: 30px;
  font-weight: 600;
  color: #456155;
  padding: 30px 5px 15px;
}
.auth-page {
  padding: 10px 20px;
  border: 0.5px solid rgb(161, 161, 161);
  z-index: 2;
  margin: 10rem 20rem;
}
.form div {
  justify-content: flex-start;
  padding: 0.3rem;
  width: 100%;
}
.form input {
  position: relative;
  width: 100%;
  height: 46px;
  padding: 0px 44px 0px 11px;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}
.form button {
  width: 97%;
  margin-top: 1rem;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  color: white;
  height: 3rem;
}
</style>
