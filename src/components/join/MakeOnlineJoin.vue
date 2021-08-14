<template>
  <div class="make-join-page">
    <div class="join-container">
      <div class="make-join-header">온라인 조인 만들기</div>
      <div class="make-join-body">
        <div>
          <div class="join-img">
            <img class="profile-img" :src="newImg ? newImg : DEFAULT_IMG" />
          </div>
          <button class="join-profile">
            <label for="input-file">썸네일 수정</label>
            <input type="file" id="input-file" @change="getImgPath" />
          </button>
        </div>
        <div>
          <form @submit.prevent="submitForm" class="form">
            <div>
              <input
                placeholder="제목을 입력하세요"
                id="title"
                type="text"
                v-model="title"
              />
            </div>
            <div>
              <input type="date" class="box" v-model="picked" />
            </div>
            <div>
              <input
                placeholder="희망 시간을 입력하세요"
                type="time"
                v-model="time"
              />
            </div>
            <div>
              <input
                placeholder="희망 인원을 입력하세요"
                id="time"
                type="text"
                v-model="maximum"
              />
            </div>
            <div>
              <textarea
                class="form-control"
                placeholder="모임 상세 내용"
                rows="3"
                v-model="detailText"
              ></textarea>
            </div>
          </form>
        </div>
        <button @click="submitForm" type="submit" class="btn btn btn-primary">
          만들기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { createJoin } from '@/api/join';

import { uploadFile, getOneThumbnail } from '@/firebase/firebaseinit';

const DEFAULT_IMG = process.env.VUE_APP_FIREBASE_GOLFZOIN;

export default {
  setup() {
    const title = ref('');
    const maximum = ref('');
    const time = ref('');
    const detailText = ref('');
    const router = useRouter();
    const newImg = ref('');
    const picked = ref(new Date());
    const saveImg = ref('');
    const getImgPath = async (event) => {
      var reader = new FileReader();

      saveImg.value = event.target.files[0];
      await uploadFile('join', saveImg.value);
      reader.onload = function (event) {
        newImg.value = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    };
    const submitForm = async () => {
      const data = {
        type: 'online',
        data: {
          title: title.value,
          time: time.value,
          date: picked.value,
          maximum: maximum.value,
          participants: 0,
          detailText: detailText.value,
        },
      };
      if (!!newImg.value) {
        const url = await getOneThumbnail(
          `join/${saveImg.value.name + saveImg.value.lastModified}_250x250`
        );
        data.data.thumbnail = url;
      } else {
        data.data.thumbnail = DEFAULT_IMG;
      }
      await createJoin(data);
      router.push({
        name: 'Main',
      });
    };
    return {
      title,
      time,
      detailText,
      submitForm,
      getImgPath,
      DEFAULT_IMG,
      newImg,
      picked,
      maximum,
    };
  },
};
</script>

<style lang="scss" scoped>
@include auth;
.make-join-header {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #456155;
}
.make-join-page {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: auto;
}
.make-join-body {
  display: flex;
  border: 1px solid black;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.join-img {
  display: flex;
  padding: 1rem;
  overflow: hidden;
  img {
    border: 1px solid black;
    object-fit: cover;
    width: 290px;
    height: 250px;
    margin: auto;
  }
}
.join-profile {
  display: flex;
  margin: auto;
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
.profile-img {
  object-fit: cover;
  margin: auto;
}
</style>
