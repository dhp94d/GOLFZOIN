<template>
  <div class="join-item-container">
    <h4>{{ title }}</h4>
    <div>
      <div>{{ date }}</div>
      <div>{{ time }}</div>
    </div>
    <img src="http://placehold.it/300x200" />
    <div class="join-detail">
      {{ limitDetailText }}
    </div>
    <img src="" alt="" />
    <div class="join-item-button-container">
      <a href="#" class="btn btn-primary" role="button">신청하기</a>
      <a
        href="#"
        class="btn btn-default"
        style="border: 1px solid black"
        role="button"
        >자세히 보기</a
      >
    </div>
  </div>
</template>

<script>
import { useJoin } from '@/composable/join';
import { ref } from '@vue/reactivity';
export default {
  props: {
    title: String,
    date: String,
    time: String,
    img: String,
    detailText: String,
  },
};
</script>

<style scoped>
.join-item-container {
  border: 1px solid black;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  height: 100%;
}
.join-item-button-container {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
}
</style>
