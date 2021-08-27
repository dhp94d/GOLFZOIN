<template>
  <div>
    <table class="user-join-list-table">
      <thead>
        <tr class="user-join-list-thead-tr">
          <th scope="col">타입</th>
          <th scope="col">조인명</th>
          <th scope="col">날짜</th>
          <th scope="col">주최자</th>
          <th scope="col">인원</th>
          <th scope="col">자세히 보기</th>
        </tr>
      </thead>
      <tbody v-for="(join, index) in joinList" :key="`joinList${index}`">
        <tr class="user-join-list-tbody-tr">
          <td>{{ join.type == 'online' ? '온라인' : '오프라인' }}</td>
          <td>{{ join.title }}</td>
          <td class="tour_date">
            날짜 : {{ join.date }} {{ join.time }}<br />
          </td>
          <td>{{ join.hostid }}</td>
          <td>{{ join.members?.length }}/{{ join.totalcount }}</td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-square"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useCalendar } from '@/composable/calendar';
import { ref, onMounted, watch } from 'vue';
export default {
  setup() {
    const joinList = ref([]);
    const {
      calendarMonthJoinList,
      calendarDay,
      calendarMonth,
      calendarMonthAllJoinList,
    } = useCalendar();

    onMounted(() => {
      joinList.value = calendarMonthAllJoinList.value;
    });

    watch([calendarDay, calendarMonth], () => {
      if (calendarDay.value === 0) {
        joinList.value = calendarMonthAllJoinList.value;
        return;
      }
      joinList.value = calendarMonthJoinList.value[calendarDay.value];
    });
    return {
      calendarMonthJoinList,
      joinList,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-join-list-table {
  width: 100%;
  margin-bottom: 20px;
}
.user-join-list-thead-tr {
  position: sticky;
  top: 0px;
  text-align: center;
  th {
    height: 50px;
    background-color: #eaf0f6;
    font-size: 12px;
    color: #464c51;
  }
}
.user-join-list-tbody-tr {
  border-bottom: 1px solid #d8d8d8;
  th {
    color: #464c51;
    font-size: 14px;
    text-align: left;
    font-weight: normal;
    text-indent: 9px;
  }
  td {
    height: 100px;
    font-size: 12px;
    color: #464c51;
    text-align: center;
    line-height: 1.5em;
  }
}
.ico_progress {
  display: inline-block;
  width: 89px;
  height: 36px;
  background: url(http://i.gzcdn.net/images/v3/gft/glt_progress.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 36px;
  letter-spacing: 1px;
  padding-right: 7px;
  font-style: normal;
}
</style>
