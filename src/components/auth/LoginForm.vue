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
              v-model="pw"
            />
          </div>
          <div style="color: red" v-if="!email || !pw">
            {{ errorMessage() }}
          </div>
          <div else>{{ '    ' }}</div>
          <div class="auth-button">
            <button
              :disabled="!email || !pw"
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
import { useRouter } from 'vue-router';
import { mwLogin } from '@/api/middleware/auth';
import { defineComponent, ref } from 'vue';
import Modal from '@/components/common/Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const router = useRouter();
    const email = ref('');
    const pw = ref('');

    const toggle = () => {
      emit('toggle');
    };
    const init = () => {
      email.value = '';
      pw.value = '';
    };

    const submitForm = async () => {
      const data = {
        authType: 'golfzoin',
        id: email.value,
        pw: pw.value,
      };
      const res = await mwLogin(process.env.VUE_APP_SERVER_TYPE, data);
      if (res) {
        history.go();
      }
    };
    const errorMessage = () => {
      let message = [];
      if (!email.value) message.push('1) 이메일을 입력하세요. ');

      if (!pw.value) message.push('비밀번호를 입력하세요. ');
      return message.join('2) ');
    };

    return {
      email,
      pw,
      submitForm,
      errorMessage,
      toggle,
    };
  },
});
</script>
<style lang="scss" scoped>
@include auth;
</style>
