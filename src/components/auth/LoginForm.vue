<template>
  <div class="contents">
    <div>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <input
            placeholder="이메일을 입력하세요"
            id="email"
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
    </div>
  </div>
</template>
<script lang="ts">
import { validateEmail } from '@/composable/validateEmail';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const store = useStore();

    const init = () => {
      email.value = '';
      password.value = '';
    };

    const submitForm = async () => {
      const data = {
        email: email.value,
        password: password.value,
      };
      const res = await store.dispatch('auth/LOGIN', data);
      if (res.data) {
        localStorage.setItem('user', email.value);
        init();
        router.push({
          name: 'Main',
        });
      }
    };

    const isUsernameValid = computed(() => validateEmail(email.value));

    return {
      email,
      password,
      submitForm,
      isUsernameValid,
    };
  },
});
</script>
<style>
.page-header {
  text-align: center;
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
