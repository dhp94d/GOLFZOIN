<template>
  <div>
    <SubHeader></SubHeader>
    <div class="calendar-container">
      <div class="calendar-Frame">
        <div>
          <SelectDate></SelectDate>
        </div>
        <div>
          <div class="calendar-join-length">
            <div class="online-len">온라인 조인: {{ onlineJoin?.length }}</div>
            <div class="offline-len">
              오프라인 조인: {{ offlineJoin?.length }}
            </div>
          </div>
          <MatrixView :headers="WEEK_DAYS" :matrix="matrix" />
        </div>
        <div class="scrollc">
          <CalendarJoinList></CalendarJoinList>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watch } from 'vue';
import SubHeader from '@/components/common/SubHeader.vue';
import MatrixView from '@/components/calendar/MatrixView.vue';
import SelectDate from '@/components/calendar/SelectDate.vue';
import CalendarJoinList from '@/components/calendar/CalendarJoinList.vue';
import { getAuthFromCookie } from '@/composable/cookies';
import { mwMyJoinList } from '@/api/middleware/mainJoin';
import { getDayMatrix } from '@/composable/calendar';
import { useCalendar } from '@/composable/calendar';

const WEEK_DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일'];

export default {
  components: {
    SubHeader,
    MatrixView,
    SelectDate,
    CalendarJoinList,
  },
  setup() {
    const onlineJoin = ref();
    const offlineJoin = ref();
    const joinList = ref([]);
    const currentMonthJoinList = ref([]);
    const { calendarMonth, calendarYear, updateDay, updateJoinList } =
      useCalendar();
    const matrix = ref(getDayMatrix(calendarYear.value, calendarMonth.value));

    const setCurrentJoinList = () => {
      currentMonthJoinList.value = joinList.value.filter(
        (join: any) =>
          join.date >
            `${String(calendarYear.value)}-${String(
              calendarMonth.value
            ).padStart(2, '0')}-00` &&
          join.date <
            `${String(calendarYear.value)}-${String(
              calendarMonth.value + 1
            ).padStart(2, '0')}-00`
      );
      updateJoinList(currentMonthJoinList.value);
      onlineJoin.value = currentMonthJoinList.value.filter(
        (join: any) => join.type === 'online'
      );
      offlineJoin.value = [
        ...currentMonthJoinList.value.filter(
          (join: any) => join.type === 'offline'
        ),
      ];
    };
    const setData = async () => {
      const res = await mwMyJoinList(
        process.env.VUE_APP_SERVER_TYPE,
        getAuthFromCookie()
      );
      if (res) {
        joinList.value = res;
        setCurrentJoinList();
      }
    };

    watch([calendarMonth, calendarYear], () => {
      matrix.value = getDayMatrix(calendarYear.value, calendarMonth.value);
      setCurrentJoinList();
    });

    onMounted(async () => {
      await setData();
    });
    return {
      matrix,
      WEEK_DAYS,
      joinList,
      onlineJoin,
      offlineJoin,
      currentMonthJoinList,
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
.calendar-join-length {
  width: 80%;
  text-align: end;
  justify-content: end;
  justify-content: flex-end;

  .online-len {
    font-weight: bold;
    color: #ff6541;
  }
  .offline-len {
    font-weight: bold;
    color: #0f95ff;
  }
}
@media (max-width: 1400px) {
  .calendar-Frame {
    width: 100vw;
  }
  .calendar-join-length {
    width: 90%;
  }
  .scrollc {
    width: 100vw;
  }
}
</style>
