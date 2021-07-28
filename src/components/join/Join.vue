<template>
  <div class="join-container">
    <div class="carousel-title">{{ carouselTitle }}</div>
    <div class="carousel">
      <div
        v-for="(url, index) in images"
        :key="`${index}`"
        class="carousel-img"
      >
        <img :src="`https://picsum.photos/id/${index}/1600/900`" />
      </div>
      <div class="arrow-button" id="prev" style="left: 0" @click="handleClick">
        &laquo;
      </div>
      <div class="arrow-button" id="next" style="right: 0" @click="handleClick">
        &raquo;
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';

const images = [
  '../../assets/movies/movie-1.jpg',
  '../../assets/movies/movie-2.jpg',
  '../../assets/movies/movie-3.jpg',
  '../../assets/movies/movie-4.jpg',
];
export default {
  setup() {
    const carouselTitle = ref('온라인 조인');
    const width = ref(0);
    const currentSlide = ref(0);
    const duration = ref(0);
    const isMoving = ref(false);

    const handleClick = (target) => {
      if (isMoving.value) return;

      const delta = id == 'prev' ? -1 : 1;
      move(currentSlide + 1 * delta, 500);
    };

    const handleImageLoad = ({ target }) => {
      if (width !== target.offsetWidth) setWidth(target.offsetWidth);
      move(1);
    };

    const handleTransitionEnd = () => {
      setIsMoving(false);

      // currentSlide === 0, 즉 선두에 추가한 클론 슬라이드면 currentSlide += images.length로 image의 마지막(images.length)으로 이동
      // currentSlide === images.length + 1, 즉 마자막에 추가한 클론 슬라이드면 currentSlide -= images.length로 image의 선두(1)로 이동
      const delta =
        currentSlide === 0 ? 1 : currentSlide === images.length + 1 ? -1 : 0;

      // 클론 슬라이드가 아니면(delta === 0) 이동하지 않는다.
      if (delta) move(currentSlide + images.length * delta);
    };

    // currentSlide를 기준으로 carousel-slides 요소를 이동시킨다.
    const move = (_currentSlide, _duration = 0) => {
      // _duration이 0이 아니면 transition이 시작된다. isMoving은 transionend 이벤트가 발생하면 false가 된다.
      if (_duration) setIsMoving(true);
      setCurrentSlide(_currentSlide);
      setDuration(_duration);
    };
    return {
      carouselTitle,
      handleClick,
      images,
    };
  },
};
</script>

<style scoped>
.join-container {
  padding: 3rem 10rem;
}
.carousel {
  width: v-bind(width);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  opacity: v-bind(width);
}
.carousel-title {
  font-size: 2rem;
  font-weight: 800;
  padding-bottom: 1rem;
}
.carousel-img {
  display: flex;
  transition: transform v-bind(duration) ms ease-out;
  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);
  transform: translate3D(v-bind((currentSlide * -100)+'%'), 0, 0);
}

.carousel-img img {
  padding: 5px;
}
.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  color: black;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  z-index: 99;
}
.arrow-button:focus {
  outline: none;
}
</style>
