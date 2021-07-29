<template>
  <div>
    <SubHeader></SubHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import SubHeader from '@/components/common/SubHeader.vue';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    SubHeader,
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
.make-join-body {
  padding: 10px 20px;
  border: 0.5px solid rgb(161, 161, 161);
  z-index: 2;
  margin: 3rem 20rem;
}
</style>
