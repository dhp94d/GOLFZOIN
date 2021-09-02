<template>
  <div class="make-join-page">
    <div class="join-container">
      <div class="make-join-body">
        <div class="body-detail">
          <div>
            <div class="join-img">
              <img
                class="profile-img"
                :src="newImg ? newImg : DEFAULT_IMG"
                alt="profile"
              />
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
        <button
          @click="submitForm"
          type="submit"
          class="btn btn btn-primary makebutton"
        >
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
import { uploadFile, getOneThumbnail } from '@/api/middleware/utils.ts';
import { getAuthFromCookie } from '@/composable/cookies';
import { mwRegistJoin } from '@/api/middleware/mainJoin';
import { useAlarm } from '@/composable/alarm';

const DEFAULT_IMG = process.env.VUE_APP_FIREBASE_GOLFZOIN;

export default {
  setup() {
    const { alarmTriggerToast } = useAlarm();
    const title = ref('');
    const totalCount = ref('0');
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
      await uploadFile('join', `online`, saveImg.value);
      reader.onload = function (event) {
        newImg.value = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    };

    const submitForm = async () => {
      const data = {
        type: 'online',
        hostid: getAuthFromCookie(),
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
          'online',
          `${saveImg.value.name + saveImg.value.lastModified}_250x250`
        );
        data.thumbnail = url;
      } else {
        data.thumbnail = DEFAULT_IMG;
      }
      alarmTriggerToast('온라인 조인을 만들었습니다.');
      await mwRegistJoin(process.env.VUE_APP_SERVER_TYPE, data);
      history.go();
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
.makebutton {
  display: flex;
  margin: auto;
  width: 100%;
  text-align: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
}
</style>
