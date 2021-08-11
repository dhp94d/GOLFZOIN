<template>
  <div>
    <div>
      <SubHeader></SubHeader>
    </div>
    <div class="auth-container">
      <div class="auth-page">
        <h3 class="page-header">회원가입</h3>
        <SignupForm></SignupForm>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SignupForm from '@/components/auth/SignupForm.vue';
import SubHeader from '@/components/common/SubHeader.vue';

export default defineComponent({
  components: {
    SignupForm,
    SubHeader,
  },
});
</script>

<style></style>
