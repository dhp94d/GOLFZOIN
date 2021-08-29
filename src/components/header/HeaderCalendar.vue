<template>
  <Datepicker class="date-picker" v-model="picked" :lower-limit="lowerLimit" />
</template>

<script>
import Datepicker from 'vue3-datepicker';
import { ref, defineComponent, watch } from 'vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';

export default defineComponent({
  components: {
    Datepicker,
  },
  setup() {
    const picked = ref(new Date());
    const lowerLimit = ref(new Date());
    const store = useStore();
    watch(picked, () =>
      store.commit(
        'search/SET_SEARCH_DATE',
        dayjs(picked.value).format('YYYY-MM-DD')
      )
    );
    return {
      picked,
      lowerLimit,
    };
  },
});
</script>

<style lang="scss" scopre>
.date-picker {
  border: none;
  background-color: #f7f7f7;
  text-align: center;
  width: 5rem;
}
</style>
