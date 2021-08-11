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
          <input
            placeholder="닉네임"
            id="nickname"
            type="text"
            v-model="nickname"
          />
        </div>
        <span>생년월일</span><br />
        <div>
          <input
            type="date"
            placeholder="생년월일을 입력하세요."
            class="box"
            v-model="birthday"
          />
        </div>
        <span>전화번호</span><br />
        <div class="signup-phone">
          <input type="text" class="pbox" v-model="phoneNumber" />
          <br />
        </div>
        <div>
          <span>성별</span><br />
          <div class="signup-gender">
            <p>남자</p>
            <input
              type="radio"
              value="man"
              style="height: 1rem; width: 1rem"
              v-model="gender"
            />
            <p>여자</p>
            <input
              type="radio"
              value="girl"
              style="height: 1rem; width: 1rem"
              v-model="gender"
            />
          </div>
        </div>
        <div>
          <input
            placeholder="주소"
            id="address"
            type="text"
            v-model="address"
            disabled="false"
          />
          <div class="address-buttons">
            <input type="button" @click="findAddress" value="검색 하기" /><br />
          </div>
        </div>
        <div>
          <input
            placeholder="타수를 입력하세요"
            id="hit"
            type="text"
            v-model="hit"
          />
        </div>

        <button
          type="submit"
          class="btn btn btn-primary auth-button"
          :disabled="!isEmailValid"
        >
          회원 가입
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { signupUser } from '@/api/auth';
import { validateEmail } from '@/composable/validateEmail';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const nickname = ref('');
    const birthday = ref('');
    const phoneNumber = ref('');
    const address = ref('');
    const hit = ref('');
    const gender = ref('');
    const latitude = ref('');
    const longitude = ref('');

    const router = useRouter();

    const isEmailValid = computed(() => validateEmail(email.value));

    const findAddress = () => {
      new daum.Postcode({
        oncomplete: function (data) {
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(data.roadAddress, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              address.value = result[0].address_name;
              latitude.value = result[0].x;
              longitude.value = result[0].y;
            }
          });
        },
      }).open();
    };
    const submitForm = async () => {
      const data = {
        email: email.value,
        password: password.value,
        nickname: nickname.value,
        birthday: birthday.value,
        phoneNumber: phoneNumber.value,
        gender: gender.value,
        address: {
          name: address.value,
          latitude: latitude.value,
          longitude: longitude.value,
        },
        hit: hit.value,
      };
      await signupUser(data);
      router.push({
        name: 'Main',
      });
    };
    return {
      submitForm,
      email,
      password,
      nickname,
      phoneNumber,
      address,
      hit,
      findAddress,
      isEmailValid,
      birthday,
      gender,
    };
  },
});
</script>
<style lang="scss" scoped>
.address-buttons {
  display: flex;
  input {
    font-weight: 600;
    background-color: white;
    color: gray;
  }
  input:hover {
    color: black;
  }
}
li {
  text-decoration: none;
  list-style: none;
}
.signup-phone {
  display: flex;
}
.signup-gender {
  display: flex;
  font-size: 1rem;
  p {
    padding-right: 0.2rem;
  }
  input {
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}
</style>
