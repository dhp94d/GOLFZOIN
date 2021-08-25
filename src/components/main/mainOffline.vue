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
          :title="offlineJoinData[slide]?.title"
          :thumbnail="offlineJoinData[slide]?.thumbnail"
          :body="offlineJoinData[slide]?.body"
          :date="offlineJoinData[slide]?.date"
          :time="offlineJoinData[slide]?.time"
          :roomNo="offlineJoinData[slide]?.roomNo"
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
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import JoinItem from '@/components/join/JoinItem.vue';
import { mwMainOfflinList } from '@/api/middleware/mainJoin.ts';
import { ref, onMounted } from 'vue';
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    JoinItem,
    Navigation,
  },
  setup() {
    const offlineJoinData = ref(['body']);

    const getOfflineJoin = async () => {
      const res = await mwMainOfflinList(process.env.VUE_APP_SERVER_TYPE);
      offlineJoinData.value.push(...res);
    };

    onMounted(() => {
      getOfflineJoin();
    });
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
