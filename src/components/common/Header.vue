<template>
  <div>
    <HeaderMain></HeaderMain>
  </div>
</template>

<script>
import HeaderMain from '@/components/header/HeaderMain.vue';
import { ref, onMounted } from 'vue';
export default {
  components: {
    HeaderMain,
  },
  setup() {
    const scrollPosition = ref(0);
    const screenWidth = ref(window.innerWidth);

    const updateScroll = () => {
      scrollPosition.value = window.scrollY;
    };
    const updateWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('scroll', updateScroll);
      window.addEventListener('resize', updateWidth);
    });

    return {
      scrollPosition,
      screenWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1000px) {
}
</style>
