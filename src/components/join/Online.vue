<template>
  <div class="join-page-container">
    <div>{{ onlineJoinData?.length }}개 이상의 조인</div>
    <div class="join-page-title">온라인 조인</div>
    <div class="join-page-filter">
      <Searchbar :type="'온라인'"></Searchbar>
    </div>
    <div id="joino" class="join-online-container">
      <div v-for="onlinejoin in onlineJoinData" :key="onlinejoin.roomNo">
        <div>
          <JoinItem
            :title="onlinejoin.title"
            :time="onlinejoin.time"
            :date="onlinejoin.date"
            :totalcount="onlinejoin.totalcount"
            :thumbnail="onlinejoin.thumbnail"
            :body="onlinejoin.body"
            :roomNo="onlinejoin.roomNo"
            :simple="true"
          ></JoinItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Searchbar from '@/components/common/Searchbar.vue';
import JoinItem from '@/components/join/JoinItem.vue';
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { mwOnlineJoinList } from '@/api/middleware/mainJoin.ts';
import { useSearch } from '@/composable/search';
import { useAlarm } from '@/composable/alarm';
export default {
  components: {
    JoinItem,
    Searchbar,
  },
  setup() {
    const { SearchDate, SearchPNumber, SearchData, SearchFollow, init } =
      useSearch();
    const startValue = ref(1);
    const onlineJoinData = ref([]);
    const { alarmTriggerToast } = useAlarm();

    const getOnlinJoin = async () => {
      const res = await mwOnlineJoinList(process.env.VUE_APP_SERVER_TYPE, {
        start: startValue.value,
        date: SearchDate.value,
        pNumber: SearchPNumber.value,
        data: SearchData.value,
        follow: SearchFollow.value,
      });
      onlineJoinData.value = res;
    };
    onMounted(() => {
      getOnlinJoin();
    });

    onUnmounted(() => {
      init();
    });

    watch([SearchDate, SearchPNumber, SearchData, SearchFollow], () => {
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
@media (max-width: 1400px) {
  .join-page-container {
    margin: 2rem;
  }
  .join-page-title {
    font-size: 1.5rem;
  }
}
</style>
