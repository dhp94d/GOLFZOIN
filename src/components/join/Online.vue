<template>
  <div class="join-page-container">
    <div>{{ onlineJoinData?.length }}개 이상의 조인</div>
    <div class="join-page-title">온라인 조인</div>
    <JoinFilter class="join-page-filter"></JoinFilter>
    <div class="join-online-container">
      <div v-for="onlinejoin in onlineJoinData" :key="onlinejoin.id">
        <div>
          <JoinItem
            :title="onlinejoin.title"
            :time="onlinejoin.time"
            :date="onlinejoin.date"
            :totalcount="onlinejoin.totalcount"
            :thumbnail="onlinejoin.thumbnail"
            :body="onlinejoin.body"
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
import { ref, onMounted } from 'vue';
import { mwGetLimitJoin } from '@/middleware/join';

export default {
  components: {
    JoinFilter,
    JoinItem,
  },
  setup() {
    const onlineJoinData = ref([]);
    const page = ref(20);
    onMounted(() => {
      const getOnlinJoin = async () => {
        const res = await mwGetLimitJoin('firebase', 'online', 20);
        onlineJoinData.value.push(...res);
      };
      getOnlinJoin();
    });
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
