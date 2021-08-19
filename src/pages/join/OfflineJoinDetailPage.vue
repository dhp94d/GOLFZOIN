<template>
  <div style="display: block">
    <div class="thumbnail">
      <img :src="JoinData.thumbnail" />
      <div class="thumbnail-title">
        <h5>{{ JoinData.title }}</h5>
        <div class="thumbnail-time">
          <div>모임시각: {{ JoinData.date }}</div>
          <div>{{ JoinData.time }}</div>
        </div>
        <div class="thumbnail-participants">
          <div>인원: {{ JoinData.participants }}/{{ JoinData.maximum }}</div>
        </div>
        <div>
          <p>
            {{ JoinData.detailText }}
          </p>
        </div>
      </div>
      <button @click="submitForm" type="submit" class="btn btn btn-primary">
        참가하기
      </button>
    </div>
  </div>
</template>

<script>
import { useJoin } from '@/composable/join';
import { onMounted, ref } from 'vue';
export default {
  setup() {
    const JoinData = ref('');
    const { target } = useJoin();

    const setJoinDetail = async () => {};

    onMounted(() => {
      setJoinDetail();
    });
    return {
      JoinData,
    };
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border: 1px solid #b8b8b8;
  border-radius: 1rem;
  width: 30%;
  margin: auto;
  img {
    display: flex;
    border: 1px solid #b8b8b8;
    border-radius: 1rem;
    width: 290px;
    height: 250px;
    margin: auto;
  }
}
.thumbnail-title {
  padding: 0.5rem;
  width: 18rem;
  margin: auto;
  h5 {
    font-weight: 600;
    color: #525252;
  }
}
.thumbnail-time {
  display: flex;
  gap: 0 0.5rem;
}

.thumbnail-participants {
  display: flex;
}
.thumbnail-address {
  text-align: end;
}
</style>
