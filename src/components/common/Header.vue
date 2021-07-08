<template>
	<header class="header">
		<div>
			<router-link to="/" class="logo">
				<img src="../../../public/logo.png" />
				<span v-if="isUserLogin">by {{ username }}</span>
			</router-link>
		</div>
		<div class="user_nav">
			<!-- 1 -->
			<template v-if="false">
				<a class="logout-button"> Logout </a>
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
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid gray;
	margin: 10px 0;
}
.user_nav {
	text-align: center;
	align-items: center;
}
.user_nav a {
	margin-left: 1rem;
	font-size: 1rem;
	text-decoration: none;
	color: gray;
	font-weight: bold;
}
</style>
