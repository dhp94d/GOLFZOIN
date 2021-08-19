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
          >
            <div calss="calendar-table-day">
              {{ day }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    matrix: Array,
    headers: Array,
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
</style>
