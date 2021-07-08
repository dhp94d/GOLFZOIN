<template>
	<div class="auth-page">
		<div>로그인 페이지</div>
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
