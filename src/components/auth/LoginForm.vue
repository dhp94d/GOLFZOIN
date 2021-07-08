<template>
	<div class="contents">
		<div>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="email" />
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn btn btn-primary"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
<style scoped></style>
