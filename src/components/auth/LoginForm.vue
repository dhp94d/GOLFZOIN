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
        <button type="submit" class="btn btn btn-primary">로그인</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { defineComponent, ref } from 'vue';

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
        router.push({
          name: 'Main',
        });
      }
    };
    return {
      email,
      password,
      submitForm,
    };
  },
});
</script>
<style scoped></style>
