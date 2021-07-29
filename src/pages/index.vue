<template>
  <div>
    <div class="header-contianer">
      <Header></Header>
      <div class="Banner-contianer">
        <Banner></Banner>
      </div>
    </div>
    <div>
      <Join></Join>
    </div>
    <div>
      <div>오프라인 조인 탭</div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Banner from '@/components/main/Banner.vue';
import Join from '@/components/join/Join.vue';
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';

export default {
  components: {
    Header,
    Banner,
    Join,
  },
  setup() {
    const store = useStore();
    onBeforeMount(async () => {
      await store.dispatch('join/GETJOIN');
    });
  },
};
</script>

<style scoped>
.header-contianer {
  width: 100%;
  height: 100%;
  background-image: url('../assets/background.jpg');
  background-size: cover;
}
.Banner-contianer {
  display: block;
  margin-top: 8rem;
}
</style>
