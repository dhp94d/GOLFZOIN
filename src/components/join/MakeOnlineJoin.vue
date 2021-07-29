<template>
  <div class="make-join-page">
    <div class="contents">
      <div class="make-join-header">온라인 조인 만들기</div>
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
            <input
              placeholder="희망 날짜를 입력하세요"
              id="date"
              type="text"
              v-model="date"
            />
          </div>
          <div>
            <input
              placeholder="희망 시간을 입력하세요"
              id="time"
              type="text"
              v-model="time"
            />
          </div>
          <div>
            <input
              placeholder="썸네일 등록"
              id="img"
              type="text"
              v-model="img"
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
          <button type="submit" class="btn btn btn-primary">만들기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { createJoin } from '@/api/join';
export default {
  setup() {
    const title = ref('');
    const date = ref('');
    const time = ref('');
    const img = ref('');
    const detailText = ref('');
    const router = useRouter();

    const submitForm = async () => {
      const data = {
        type: 'online',
        data: {
          title: title.value,
          date: date.value,
          time: time.value,
          img: img.value,
          detailText: detailText.value,
        },
      };
      await createJoin(data);
      router.push({
        name: 'Main',
      });
    };
    return {
      title,
      date,
      time,
      img,
      detailText,
      submitForm,
    };
  },
};
</script>

<style>
.make-join-header {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #456155;
  padding: 30px 5px 15px;
}
.make-join-page {
  padding: 10px 20px;
  border: 0.5px solid rgb(161, 161, 161);
  z-index: 2;
}
</style>
