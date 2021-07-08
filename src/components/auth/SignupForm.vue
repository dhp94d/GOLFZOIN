<template>
	<div class="contents">
		<div>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="email">이메일: </label>
					<input id="email" type="text" v-model="email" />
				</div>
				<div>
					<label for="password">비밀번호: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="name">이름: </label>
					<input id="name" type="text" v-model="name" />
				</div>
				<div>
					<label for="nickname">닉네임: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<div>
					<label for="birthday">생년월일: </label>
					<input id="birthday" type="text" v-model="birthday" />
				</div>
				<div>
					<label for="phoneNumber">전화번호: </label>
					<input id="phoneNumber" type="text" v-model="phoneNumber" />
				</div>
				<div>
					<label for="address">주소: </label>
					<input id="address" type="text" v-model="address" />
				</div>
				<div>
					<label for="hit">타수: </label>
					<input id="hit" type="text" v-model="hit" />
				</div>

				<button type="submit" class="btn btn btn-primary">회원 가입</button>
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
