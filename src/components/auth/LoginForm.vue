<template>
  <div>
    <Modal @toggle="toggle">
      <template #body>
        <form @submit.prevent="submitForm" class="form">
          <div>
            <input
              placeholder="이메일을 입력하세요"
              type="text"
              v-model="email"
            />
          </div>
          <div>
            <input
              placeholder="비밀번호를 입력하세요"
              type="password"
              v-model="password"
            />
          </div>
          <div style="color: red" v-if="!isUsernameValid || !password">
            {{ errorMessage() }}
          </div>
          <div else>{{ '    ' }}</div>
          <div class="auth-button">
            <button
              :disabled="!isUsernameValid || !password"
              type="submit"
              class="btn btn btn-primary"
            >
              로그인
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>
<script lang="ts">
import { validateEmail } from '@/composable/validateEmail';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, defineComponent, ref } from 'vue';
import Modal from '@/components/common/Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const store = useStore();

    const toggle = () => {
      emit('toggle');
    };
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
        init();
        router.push({
          name: 'Main',
        });
      }
    };
    const errorMessage = () => {
      let message = [];
      if (!email.value) message.push('1) 이메일을 입력하세요. ');
      if (email.value && !isUsernameValid.value) {
        message.push('1) 이메일 형식이 맞지않습니다. ex) a@a.com ');
      }
      if (!password.value) message.push('비밀번호를 입력하세요. ');
      return message.join('2) ');
    };

    const isUsernameValid = computed(() => validateEmail(email.value));

    return {
      email,
      password,
      submitForm,
      isUsernameValid,
      errorMessage,
      toggle,
    };
  },
});
</script>
<style lang="scss" scoped>
@include auth;
</style>
