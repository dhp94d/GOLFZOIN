<template>
  <div class="row">
    <div
      class="col-sm-6 col-md-4 item-list"
      v-for="(join, index) in onlineJoinList"
      :key="`joinList${index}`"
    >
      <JoinItem
        :title="join.data.title"
        :date="join.data.date"
        :time="join.data.time"
        :img="join.data.img"
        :detailText="join.data.detailText"
      ></JoinItem>
    </div>
  </div>
</template>

<script>
import { useJoin } from '@/composable/join';
import JoinItem from '@/components/join/JoinItem.vue';
export default {
  components: {
    JoinItem,
  },
  setup() {
    const { onlineJoinList, offlineJoinList } = useJoin();

    return {
      onlineJoinList,
      offlineJoinList,
    };
  },
};
</script>

<style scoped>
.item-list {
  padding-bottom: 1rem;
}
</style>
