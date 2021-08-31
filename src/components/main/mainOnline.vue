<template>
  <div>
    <div class="main-join-header">
      <div class="mobile-join"></div>
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
          :body="onlineJoinData[slide]?.body"
          :date="onlineJoinData[slide]?.date"
          :time="onlineJoinData[slide]?.time"
          :roomNo="onlineJoinData[slide]?.roomNo"
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
import { mwMainOnlineList } from '@/api/middleware/mainJoin.ts';

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

    const getOnlinJoin = async () => {
      const res = await mwMainOnlineList(process.env.VUE_APP_SERVER_TYPE);
      onlineJoinData.value.push(...res);
    };

    onMounted(() => {
      getOnlinJoin();
    });

    const settings = {
      itemsToShow: 1.8,
      modelValue: 1,
      wrapAround: true,
    };
    const breakpoints = {
      1100: {
        itemsToShow: 4.8,
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
.mobile-join {
  display: none;
}
.main-join-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: black;
  }
}
.main-join-title {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
}
.main-join-detail {
  display: flex;
  justify-content: flex-end;
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

@media (max-width: 1400px) {
  .mobile-join {
    display: block;
  }
  .main-join-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .main-join-detail {
    font-size: 0.5rem;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    margin: 0 0 auto 0;

    &:hover {
      color: black;
    }
  }
}
</style>
