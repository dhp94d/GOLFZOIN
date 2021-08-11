<template>
  <div class="user-info">
    <div class="user-img">
      <img :src="newImg ? newImg : DEFAULT_IMG" />
    </div>
    <button class="user-profile" width="200px">
      <label for="input-file">프로필 수정</label>
      <input type="file" id="input-file" @change="getImgPath" />
    </button>
    <form @submit.prevent="submitForm" class="user-info-dataList">
      <div class="user-email">
        <span>이메일</span>
        <input :placeholder="user.email" disabled="false" />
      </div>
      <div>
        <spane>비밀번호</spane>
        <input id="password" type="text" v-model="password" />
      </div>
      <div class="user-nickname">
        <span>닉네임</span>
        <input :placeholder="user.nickname" v-model="nickname" />
      </div>
      <div class="user-email">
        <span>생년월일</span>
        <input
          type="date"
          :value="user.birthday"
          class="box"
          disabled="false"
        />
      </div>
      <div class="user-info-data">
        <span>휴대폰 번호</span>
        <input :placeholder="user.phoneNumber" v-model="phoneNumber" />
      </div>
      <div class="user-info-data">
        <span>주소</span>
        <div style="display: flex">
          <input :placeholder="user.address?.name" v-model="address" />
          <div class="address-buttons">
            <input type="button" @click="findAddress" value="검색 하기" /><br />
          </div>
        </div>
      </div>
      <div class="user-info-data">
        <span>타수</span>
        <input :placeholder="user.hit" v-model="hit" />
      </div>
    </form>
    <button
      @click="submitForm"
      type="submit"
      class="btn btn btn-primary auth-button"
    >
      수정 하기
    </button>
  </div>
</template>
<script>
import { ref } from 'vue';
import { loginUser, patchUser } from '@/api/auth';
import { useRouter } from 'vue-router';
import { uploadFile, getOneThumbnail } from '@/firebaseinit';
const DEFAULT_IMG = process.env.VUE_APP_FIREBASE_GOLFZOIN;

export default {
  setup() {
    const user = ref({});
    const password = ref('');
    const nickname = ref('');
    const phoneNumber = ref('');
    const address = ref('');
    const hit = ref('');
    const latitude = ref('');
    const longitude = ref('');
    const router = useRouter();
    const newImg = ref('');
    const saveImg = ref();

    const getImgPath = (event) => {
      var reader = new FileReader();
      saveImg.value = event.target.files[0];
      reader.onload = function (event) {
        newImg.value = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    };

    const getCookie = function (name) {
      const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return value ? value[2] : null;
    };

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
    const getUser = async () => {
      const response = await loginUser(`?email=${getCookie('til_user')}`);
      user.value = response.data[0];
      newImg.value = user.value.profile;
    };
    getUser();

    const submitForm = async () => {
      const data = {};
      if (!!password.value) data.password = password.value;
      if (!!nickname.value) data.nickname = nickname.value;
      if (!!address.value) data.address = address.value;
      if (!!hit.value) data.hit = hit.value;
      if (!!phoneNumber.value) data.phoneNumber = phoneNumber.value;

      if (!!saveImg.value) {
        await uploadFile(user.value.email, saveImg.value);
        const url = await getOneThumbnail(user.value.email);
        data.profile = url;
      }
      await patchUser(user.value.id, data);
      router.push({
        name: 'Main',
      });
    };
    return {
      user,
      findAddress,
      password,
      nickname,
      phoneNumber,
      hit,
      address,
      submitForm,
      DEFAULT_IMG,
      getImgPath,
      newImg,
      saveImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
}
.user-info-dataList {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-bottom: 1rem;
  :is(div, span) {
    font-weight: bold;
    width: 5rem;
  }
}
.user-profile {
  background-color: white;
  border: 0;
  :hover {
    color: black;
  }
  label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    font-weight: bold;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }
  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
}

.user-img {
  box-shadow: 1px 1px 2px 2px gray;
  margin-bottom: 0.5rem;
}
</style>
