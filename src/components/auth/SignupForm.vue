<template>
  <div>
    <Modal @toggle="toggle">
      <template #body>
        <form @submit.prevent="submitForm" class="form">
          <span>회원 정보</span><br />
          <div>
            <input placeholder="이메일" type="text" v-model="email" />
          </div>
          <div>
            <input placeholder="이름" type="text" v-model="name" />
          </div>
          <div>
            <input
              placeholder="비밀번호를 입력하세요"
              type="password"
              v-model="pw"
              minlength="6"
            />
          </div>
          <div>
            <input placeholder="닉네임" type="text" v-model="nickname" />
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
            <input
              placeholder="010-xxxx-xxxx"
              type="text"
              class="pbox"
              v-model="p_number"
            />
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
            <span>주소</span><br />
            <input
              placeholder="주소를 검색하세요"
              id="address"
              type="text"
              v-model="address"
              disabled="false"
            />
            <div class="address-buttons">
              <input
                type="button"
                @click="findAddress"
                value="검색 하기"
              /><br />
            </div>
          </div>
          <div>
            <span>타수</span><br />
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
            :disabled="!isEmailValid || !nickname"
          >
            회원 가입
          </button>
        </form>
      </template>
    </Modal>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mwSignup } from '@/api/middleware/auth';
import { validateEmail } from '@/composable/validateEmail';
import Modal from '@/components/common/Modal.vue';

const DEFAULT_IMG = process.env.VUE_APP_FIREBASE_GOLFZOIN;

export default defineComponent({
  components: {
    Modal,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const router = useRouter();

    const email = ref('');
    const pw = ref('');
    const name = ref('');
    const nickname = ref('');
    const birthday = ref('');
    const p_number = ref('');
    const address = ref('');
    const hit = ref(0);
    const gender = ref('');
    const latitude = ref(0);
    const longitude = ref(0);

    const toggle = () => {
      emit('toggle');
    };

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
        id: email.value,
        pw: pw.value,
        name: name.value,
        nickname: nickname.value,
        birthday: birthday.value,
        p_number: p_number.value,
        gender: gender.value,
        address: address.value,
        lat: latitude.value,
        lon: longitude.value,
        hit: hit.value,
        profile: DEFAULT_IMG,
      };
      const res = await mwSignup(process.env.VUE_APP_SERVER_TYPE, data);

      if (res === true) {
        router.go();
      } else if (res[0] === true) {
        alert('이미 존재하는 email입니다.');
      } else if (res[1] === true) {
        alert('이미 존재하는 nickname 입니다.');
      }
    };
    return {
      submitForm,
      email,
      pw,
      nickname,
      name,
      p_number,
      address,
      hit,
      findAddress,
      isEmailValid,
      birthday,
      gender,
      toggle,
    };
  },
});
</script>
<style lang="scss" scoped>
@include auth;
.address-buttons {
  display: flex;
  input {
    background-color: white;
    color: gray;
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
    margin: auto 0;
    padding-right: 0.2rem;
  }
  input {
    align-items: center;
    margin: auto 0;
  }
}
</style>
