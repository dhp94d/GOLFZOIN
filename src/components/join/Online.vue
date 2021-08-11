<template>
  <div class="join-page-container">
    <div>{{ onlineJoinData?.length }}개 이상의 조인</div>
    <div class="join-page-title">온라인 조인</div>
    <JoinFilter class="join-page-filter"></JoinFilter>
    <div class="join-online-container">
      <div
        v-for="(onlinejoin, index) in onlineJoinData"
        :key="`onlinejoin${index}`"
      >
        <div>
          <JoinItem
            :title="onlinejoin.data.title"
            :time="onlinejoin.data.time"
            :date="onlinejoin.data.date"
            :maximum="onlinejoin.data.maximum"
            :thumbnail="onlinejoin.data.thumbnail"
            :detailText="onlinejoin.data.detailText"
            :participants="onlinejoin.data.participants"
            :id="onlinejoin.id"
            :simple="true"
          ></JoinItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JoinFilter from '@/components/join/JoinFilter.vue';
import JoinItem from '@/components/join/JoinItem.vue';
import { ref } from 'vue';
import { getJoinAll } from '@/api/join';
export default {
  components: {
    JoinFilter,
    JoinItem,
  },
  setup() {
    const onlineJoinData = ref();
    (async () => {
      const res = await getJoinAll('online');
      onlineJoinData.value = res.data;
    })();
    return {
      onlineJoinData,
    };
  },
};
</script>

<style lang="scss" scoped>
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
.join-online-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
