<template>
  <div>
    <div v-if="scrollPosition < 30 && screenWidth > 1000">
      <HeaderMain></HeaderMain>
    </div>
    <div v-else>
      <HeaderFixed></HeaderFixed>
    </div>
  </div>
</template>

<script>
import HeaderFixed from '@/components/header/HeaderFixed.vue';
import HeaderMain from '@/components/header/HeaderMain.vue';
import { ref, onMounted } from 'vue';
export default {
  components: {
    HeaderFixed,
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
