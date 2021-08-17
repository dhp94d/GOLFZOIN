<template>
  <div>
    <div class="main-join-header">
      <router-link to="/join/onlinejoin">
        <div class="main-join-title">온라인 조인</div>
      </router-link>
      <router-link to="/join/onlinejoin">
        <div class="main-join-detail">자세히 보기</div>
      </router-link>
    </div>
    <carousel :breakpoints="breakpoints" :settings="settings">
      <slide v-for="slide in 7" :key="slide">
        <JoinItem
          class="carousel__item"
          :title="onlineJoinData[slide]?.title"
          :thumbnail="onlineJoinData[slide]?.thumbnail"
          :detailText="onlineJoinData[slide]?.body"
          :date="onlineJoinData[slide]?.date"
          :time="onlineJoinData[slide]?.time"
          :id="onlineJoinData[slide]?.id"
          :simple="true"
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
import { ref, onMounted } from 'vue';
import { mwGetLimitJoin } from '@/middleware/join';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    JoinItem,
    Navigation,
  },
  setup() {
    const onlineJoinData = ref(['sda']);

    onMounted(() => {
      const getOnlinJoin = async () => {
        const res = await mwGetLimitJoin('firebase', 'online', 7);
        console.log(res);
        onlineJoinData.value.push(...res);
      };
      getOnlinJoin();
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
        modelValue: 3,
      },
    };

    return {
      onlineJoinData,
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
