<template>
  <div class="join-page-container">
    <div class="join-page-title">온라인 조인</div>
    <JoinFilter class="join-page-filter"></JoinFilter>
    <div></div>
    <JoinMap></JoinMap>
  </div>
</template>
<script>
import JoinFilter from '@/components/join/JoinFilter.vue';
import JoinMap from '@/components/join/JoinMap.vue';

export default {
  components: {
    JoinFilter,
    JoinMap,
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
.date-picker {
  border: none;
  background-color: #f7f7f7;
}
</style>
