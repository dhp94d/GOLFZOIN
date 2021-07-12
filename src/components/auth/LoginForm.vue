<template>
  <div class="contents">
    <div>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <input
            placeholder="아이디를 입력하세요"
            id="username"
            type="text"
            v-model="email"
          />
        </div>
        <div>
          <input
            placeholder="비밀번호를 입력하세요"
            id="password"
            type="text"
            v-model="password"
          />
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
