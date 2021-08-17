<template>
  <div class="make-join-page">
    <div class="join-container">
      <div class="make-join-body">
        <div class="make-join-header">온라인 조인 만들기</div>
        <div class="body-detail">
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
                  type="text"
                  v-model="title"
                  maxlength="10"
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
                  type="text"
                  v-model="totalCount"
                />
              </div>
              <div>
                <input
                  placeholder="네트워크 플레이 키를 입력해주세요"
                  type="text"
                  v-model="pw"
                />
              </div>
              <div>
                <textarea
                  class="form-control"
                  placeholder="모임 상세 내용"
                  rows="3"
                  v-model="body"
                ></textarea>
              </div>
            </form>
          </div>
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
import dayjs from 'dayjs';
import { isLoggedin } from '@/middleware/auth';
import { mwCreateJoin } from '@/middleware/join';
import { uploadFile, getOneThumbnail } from '@/firebase/img';

const DEFAULT_IMG = process.env.VUE_APP_FIREBASE_GOLFZOIN;

export default {
  setup() {
    const title = ref('');
    const totalCount = ref(0);
    const time = ref('');
    const body = ref('');
    const router = useRouter();
    const pw = ref('');
    const newImg = ref('');
    const picked = ref(dayjs().format('YYYY-MM-DD'));
    const saveImg = ref('');
    const getImgPath = async (event) => {
      var reader = new FileReader();

      saveImg.value = event.target.files[0];
      await uploadFile('join', '', saveImg.value);
      reader.onload = function (event) {
        newImg.value = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    };
    const submitForm = async () => {
      const data = {
        type: 'online',
        hostid: await isLoggedin('firebase'),
        date: picked.value,
        totalcount: totalCount.value,
        title: title.value,
        time: time.value,
        pw: pw.value,
        title: title.value,
        body: body.value,
      };
      if (!!newImg.value) {
        const url = await getOneThumbnail(
          'join',
          '',
          `${saveImg.value.name + saveImg.value.lastModified}_250x250`
        );
        data.thumbnail = url;
      } else {
        data.thumbnail = DEFAULT_IMG;
      }
      // await createJoin(data);
      await mwCreateJoin('firebase', data);
      router.push({
        name: 'Main',
      });
    };
    return {
      title,
      time,
      body,
      submitForm,
      getImgPath,
      DEFAULT_IMG,
      newImg,
      picked,
      totalCount,
      pw,
    };
  },
};
</script>

<style lang="scss" scoped>
@include auth;
@include makeJoin;
</style>
