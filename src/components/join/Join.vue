<template>
  <div class="join-page-container">
    <JoinLen></JoinLen>
    <div class="join-page-title">온라인 조인</div>
    <JoinFilter class="join-page-filter"></JoinFilter>
    <JoinItemList></JoinItemList>
  </div>
</template>
<script>
import JoinLen from '@/components/join/JoinLen.vue';
import JoinFilter from '@/components/join/JoinFilter.vue';
import JoinItemList from '@/components/join/JoinItemList.vue';

export default {
  components: {
    JoinLen,
    JoinFilter,
    JoinItemList,
  },
  setup() {},
};
</script>

<style scoped>
.join-page-container {
  margin: 2rem 20rem;
}
.join-page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
}
.join-page-filter {
  margin-bottom: 2rem;
}
</style>
