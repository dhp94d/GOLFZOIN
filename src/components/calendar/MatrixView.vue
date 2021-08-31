<template>
  <div>
    <table class="calendar-table">
      <thead>
        <tr class="calendar-table-header">
          <th v-for="(item, index) in headers" :key="`week${index}`">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="calendar-table-body"
          v-for="(days, index) in matrix"
          :key="`days${index}`"
        >
          <td
            class="calendar-table-cell"
            v-for="(day, index) in days"
            :key="`day${index}`"
            @click="updateDayButton(day)"
          >
            <div calss="calendar-table-day">
              {{ day }}
            </div>
            <div class="calendar-join-length">
              <div v-if="calendarMonthJoinList[day]">
                <div
                  class="online-length"
                  v-if="
                    calendarMonthJoinList[day]?.filter(
                      (v) => v.type === 'online'
                    ).length !== 0
                  "
                >
                  온라인:
                  {{
                    calendarMonthJoinList[day]?.filter(
                      (v) => v.type === 'online'
                    ).length
                  }}
                </div>
                <div
                  class="offline-length"
                  v-if="
                    calendarMonthJoinList[day]?.filter(
                      (v) => v.type === 'offline'
                    ).length !== 0
                  "
                >
                  오프라인:
                  {{
                    calendarMonthJoinList[day]?.filter(
                      (v) => v.type === 'offline'
                    ).length
                  }}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useCalendar } from '@/composable/calendar';
export default {
  props: {
    matrix: Array,
    headers: Array,
  },
  setup() {
    const { calendarMonthJoinList, updateDay } = useCalendar();

    const updateDayButton = (day) => {
      updateDay(parseInt(day));
    };

    return {
      calendarMonthJoinList,
      updateDayButton,
    };
  },
};
</script>

<style lang="scss" scoped>
.calendar-table {
  margin: auto;
  width: 70%;
  margin-bottom: 1rem;
  table-layout: fixed;
  text-align: center;
  border-spacing: none;

  thead {
    height: 3rem;
  }
}
.calendar-table-header {
  font-size: 1rem;
  color: #333333;
  font-weight: bold;
}
.calendar-table-body {
  font-size: 1rem;
  height: 4rem;
  color: #616060;
}
.calendar-table-cell {
  text-align: center;
  vertical-align: top;
}
.calendar-join-length {
  text-align: center;
  font-size: 0.7rem;
}

.online-length {
  font-weight: bold;
  color: #ff6541;
}

.offline-length {
  font-weight: bold;
  color: #0f95ff;
}
.calendar-table-cell {
  &:hover {
    cursor: pointer;
  }
}
@media (max-width: 1400px) {
  .calendar-table {
    width: 100%;
  }
  thead {
    height: 2rem;
  }
  .calendar-table-body {
    font-size: 0.8rem;
    height: 3rem;
    color: #616060;
  }
  .online-length {
    font-size: 0.5rem;
    font-weight: bold;
    color: #ff6541;
  }

  .offline-length {
    font-size: 0.5rem;
    font-weight: bold;
    color: #0f95ff;
  }
}
</style>
