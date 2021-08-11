<template>
  <div>
    <div class="main-join-header">
      <router-link to="/join/offlinejoin">
        <div class="main-join-title">온프라인 조인</div>
      </router-link>
      <router-link to="/join/offlinejoin">
        <div class="main-join-detail">자세히 보기</div>
      </router-link>
    </div>
    <carousel :breakpoints="breakpoints" :settings="settings">
      <slide v-for="slide in 7" :key="slide">
        <JoinItem
          class="carousel__item"
          :title="offlineJoinData[slide]?.data.title"
          :thumbnail="offlineJoinData[slide]?.data.thumbnail"
          :detailText="offlineJoinData[slide]?.data.detailText"
          :date="offlineJoinData[slide]?.data.date"
          :time="offlineJoinData[slide]?.data.time"
          :participants="offlineJoinData[slide]?.data.participants"
          :maximum="offlineJoinData[slide]?.data.maximum"
          :simple="false"
          :addressName="offlineJoinData[slide]?.data.address.addressName"
          :id="offlineJoinData[slide]?.id"
        ></JoinItem>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script>
import { getSelectJoin } from '@/api/join';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import JoinItem from '@/components/join/JoinItem.vue';
import { ref } from 'vue';
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    JoinItem,
    Navigation,
  },
  setup() {
    const offlineJoinData = ref(['detailText']);
    (async () => {
      const res = await getSelectJoin('offline');
      offlineJoinData.value.push(...res.data);
    })();
    const settings = {
      itemsToShow: 1,
      modelValue: 1,
      wrapAround: true,
    };
    const breakpoints = {
      100: {
        itemsToShow: 1,
      },
      // 700px and up
      800: {
        itemsToShow: 1.4,
      },
      1100: {
        itemsToShow: 2.4,
      },
      1400: {
        itemsToShow: 3.4,
      },
      // 1024 and up
      1700: {
        itemsToShow: 4.8,
      },
    };
    return {
      offlineJoinData,
      settings,
      breakpoints,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-join-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: black;
  }
}
.main-join-title {
  font-size: 2rem;
  font-weight: bold;
}
.main-join-detail {
  font-weight: bold;
  color: gray;
  cursor: pointer;
  margin: auto 0 0 0;

  &:hover {
    color: black;
  }
}
.carousel__slide > .carousel__item {
  transform: scale(0.8);
  opacity: 0.5;
  transition: 0.5s;
  padding: 1rem;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
</style>
