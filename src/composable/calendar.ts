import dayjs from 'dayjs';
import { computed } from 'vue';
import { useStore } from 'vuex';

export const useCalendar = () => {
  const store = useStore();
  const calendarDay = computed(() => store.state.calendar.day);
  const calendarMonth = computed(() => store.state.calendar.month);
  const calendarYear = computed(() => store.state.calendar.year);
  const calendarMonthJoinList = computed(
    () => store.state.calendar.monthJoinList
  );
  const calendarMonthAllJoinList = computed(
    () => store.state.calendar.monthAllJoinList
  );
  const incrementMonth = () => store.commit('calendar/INCREMENT_MONTH');
  const decrementMonth = () => store.commit('calendar/DECREMENT_MONTH');
  const updateDay = (day: number) => store.commit('calendar/UPDATE_DAY', day);
  const updateJoinList = (joinList: object[]) => {
    store.commit('calendar/UPDATE_CURRENT_JOINLIST', joinList);
  };

  return {
    calendarDay,
    calendarMonth,
    calendarYear,
    incrementMonth,
    decrementMonth,
    updateDay,
    updateJoinList,
    calendarMonthJoinList,
    calendarMonthAllJoinList,
  };
};

const getDayMatrix = (year: number, month: number): string[][] => {
  let setMonth: number = month - 1;
  let setYear: number = year;
  if (setMonth < 0) {
    setMonth = 12;
    setYear -= 1;
  }
  const date = dayjs().year(setYear).month(setMonth);
  const weekSlice = 7;
  const startOfMonth = date.startOf('month').date();
  const endOfMonth = date.endOf('month').date();

  const startDay = date.startOf('month').day();
  const remain = (startDay + endOfMonth) % 7;
  const dataArr = [
    ...' '.repeat(startDay).split(''),
    ...Array.from({ length: endOfMonth - startOfMonth + 1 }, (v, i) =>
      String(i + 1)
    ),
    ...(7 - remain === 7 ? [] : ' '.repeat(7 - remain).split('')),
  ];
  const resultMatrix = (): string[][] => {
    const result = [];
    let i = 0;
    while (i < dataArr.length / weekSlice) {
      result.push(dataArr.slice(i * weekSlice, i * weekSlice + weekSlice));
      i += 1;
    }
    return result;
  };
  return resultMatrix();
};

export { getDayMatrix };
