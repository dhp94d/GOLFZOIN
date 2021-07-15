<template>
  <div class="contents">
    <div>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <input placeholder="이메일" id="email" type="text" v-model="email" />
        </div>
        <div>
          <input
            placeholder="비밀번호"
            id="password"
            type="text"
            v-model="password"
          />
        </div>
        <div>
          <input placeholder="이름" id="name" type="text" v-model="name" />
        </div>
        <div>
          <input
            placeholder="닉네임"
            id="nickname"
            type="text"
            v-model="nickname"
          />
        </div>
        <div>
          <input
            placeholder="생년월일"
            id="birthday"
            type="text"
            v-model="birthday"
          />
        </div>
        <div>
          <input
            placeholder="전화번호"
            id="phoneNumber"
            type="text"
            v-model="phoneNumber"
          />
        </div>
        <div>
          <input
            placeholder="주소"
            id="address"
            type="text"
            v-model="address"
          />
        </div>
        <div>
          <input
            placeholder="타수를 입력하세요"
            id="hit"
            type="text"
            v-model="hit"
          />
        </div>

        <button type="submit" class="btn btn btn-primary">회원 가입</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const name = ref('');
    const nickname = ref('');
    const birthday = ref('');
    const phoneNumber = ref('');
    const address = ref('');
    const hit = ref('');
    const router = useRouter();

    const submitForm = async () => {
      const data = {
        email: email.value,
        password: password.value,
        name: name.value,
        nickname: nickname.value,
        birthday: birthday.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        hit: hit.value,
      };
      await axios.post('http://localhost:3000/users', data);
      router.push({
        name: 'Main',
      });
    };
    return {
      submitForm,
      email,
      password,
      name,
      nickname,
      phoneNumber,
      address,
      hit,
    };
  },
});
</script>
<style scoped></style>
