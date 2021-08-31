<template>
  <div>
    <div v-if="showDetailOnlineJoin">
      <OnlineJoinDetail @toggle="detailOnlineJoinToggle"></OnlineJoinDetail>
    </div>
    <div v-if="showDetailOfflineJoin">
      <OfflineJoinDetail @toggle="detailOfflineJoinToggle"></OfflineJoinDetail>
    </div>

    <table class="user-join-list-table">
      <thead>
        <tr class="user-join-list-thead-tr">
          <th scope="col">타입</th>
          <th scope="col" class="mobile-join-title">조인명</th>
          <th scope="col" class="web-clist">날짜</th>
          <th scope="col" class="web-clist">주최자</th>
          <th scope="col" class="web-clist">총 인원</th>
          <th scope="col">자세히 보기</th>
        </tr>
      </thead>
      <tbody v-for="(join, index) in joinList" :key="`joinList${index}`">
        <tr class="user-join-list-tbody-tr">
          <td>{{ join.type == 'online' ? '온라인' : '오프라인' }}</td>
          <td>{{ join.title }}</td>
          <td class="tour_date web-clist">
            날짜 : {{ join.date }} {{ join.time }}<br />
          </td>
          <td class="web-clist">{{ join.hostid }}</td>

          <td class="web-clist">{{ join.totalcount }}</td>
          <td>
            <div @click="showJoinInfo(join.type, join.roomNo)">
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
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useCalendar } from '@/composable/calendar';
import { ref, onMounted, watch } from 'vue';
import OnlineJoinDetail from '@/components/join/OnlineJoinDetail.vue';
import OfflineJoinDetail from '@/components/join/OfflineJoinDetail.vue';
import { useJoin } from '@/composable/join';
export default {
  components: {
    OnlineJoinDetail,
    OfflineJoinDetail,
  },
  setup() {
    const { updateTarget } = useJoin();
    const joinList = ref([]);
    const showDetailOfflineJoin = ref(false);
    const showDetailOnlineJoin = ref(false);
    const {
      calendarMonthJoinList,
      calendarDay,
      calendarMonth,
      calendarMonthAllJoinList,
    } = useCalendar();

    const showJoinInfo = (type, roomNo) => {
      updateTarget(roomNo);
      if (type === 'online') {
        detailOnlineJoinToggle();
      } else {
        detailOfflineJoinToggle();
      }
    };
    onMounted(() => {
      joinList.value = calendarMonthAllJoinList.value;
    });

    watch([calendarDay, calendarMonth, calendarMonthAllJoinList], () => {
      if (calendarDay.value === 0) {
        joinList.value = calendarMonthAllJoinList.value;
        return;
      }
      joinList.value = calendarMonthJoinList.value[calendarDay.value];
    });

    const detailOfflineJoinToggle = () => {
      showDetailOfflineJoin.value = !showDetailOfflineJoin.value;
    };
    const detailOnlineJoinToggle = () => {
      showDetailOnlineJoin.value = !showDetailOnlineJoin.value;
    };
    return {
      calendarMonthJoinList,
      showJoinInfo,
      joinList,
      detailOfflineJoinToggle,
      detailOnlineJoinToggle,
      showDetailOfflineJoin,
      showDetailOnlineJoin,
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
@media (max-width: 1400px) {
  .web-clist {
    display: none;
  }
  .mobile-join-title {
    width: 50vw;
  }
}
</style>
