<template>
  <Datepicker class="date-picker" v-model="picked" :lower-limit="lowerLimit" />
</template>

<script>
import Datepicker from 'vue3-datepicker';
import { ref, defineComponent, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    Datepicker,
  },
  setup() {
    const picked = ref(new Date());
    const lowerLimit = ref(new Date());
    const store = useStore();

    watch(picked, () => store.commit('search/SET_SEARCH_DATE', picked.value));
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
}
</style>
