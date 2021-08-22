<template>
  <div>
    <SubHeader></SubHeader>
    <div class="calendar-container">
      <div class="calendar-Frame">
        <div>
          <SelectDate></SelectDate>
        </div>
        <div calendar-body>
          <MatrixView :headers="WEEK_DAYS" :matrix="matrix" />
        </div>
        <div>12월</div>
        <div class="scrollc">
          <UserJoinList></UserJoinList>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SubHeader from '@/components/common/SubHeader.vue';
import MatrixView from '@/components/calendar/MatrixView.vue';
import SelectDate from '@/components/calendar/SelectDate.vue';
import UserJoinList from '@/components/user/UserJoinList.vue';
// import { getUserJoinList } from '@/middleware/auth';
import getDayMatrix from '@/composable/calendar';
import dayjs from 'dayjs';

const WEEK_DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일'];

export default {
  components: {
    SubHeader,
    MatrixView,
    SelectDate,
    UserJoinList,
  },
  setup() {
    const onlineLen = ref();
    const offlineLen = ref();
    const joinList: any = ref([]);
    const matrix = ref(getDayMatrix(dayjs().year(), dayjs().month()));
    // (async () => {
    //   const res = await getUserJoinList('firebase');
    //   const array = await [...res];
    //   console.log(array);
    //   joinList.value = array;
    //   onlineLen.value = joinList.value.filter(
    //     (v: any) => v.type === 'online'
    //   ).length;
    //   offlineLen.value = joinList.value.filter(
    //     (v: any) => v.type === 'offline'
    //   ).length;
    // })();

    return {
      matrix,
      WEEK_DAYS,
      joinList,
      onlineLen,
      offlineLen,
    };
  },
};
</script>

<style lang="scss" scoped>
.calendar-container {
  background-color: rgb(242, 243, 246);
}
.calendar-Frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  letter-spacing: -0.02em;
  height: 90vh;
  width: 50vw;
  background-color: white;
  border-right: 1px solid rgba(33, 33, 36, 0.07);
  border-left: 1px solid rgba(33, 33, 36, 0.07);
}
.scrollc {
  overflow: scroll;
  width: 50vw;
  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 100px;
  }
}
</style>
