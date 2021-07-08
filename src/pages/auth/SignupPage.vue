<template>
	<div class="auth-page">
		<h3>회원가입 페이지</h3>
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
.auth-page {
	display: block;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	background-color: white;
	border: 0.5px solid gray;
	z-index: 2;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
}
</style>
