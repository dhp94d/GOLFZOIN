<template>
  <div class="number-updown-container">
    <div class="number-updown-mutation" @click="lClick">&lt;</div>
    <input
      class="number-updown-view"
      type="text"
      :value="number"
      maxlength="500"
    />
    <div class="number-updown-mutation" @click="RClick">&gt;</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const number = ref(0);
    const store = useStore();

    const addressMutation = () => {
      store.commit('search/SET_SEARCH_PNUMBER', number.value);
    };
    const lClick = () => {
      if (number.value <= 0) return;
      number.value -= 1;
      addressMutation();
    };
    const RClick = () => {
      if (number.value > 500) return;
      number.value += 1;
      addressMutation();
    };
    return {
      number,
      lClick,
      RClick,
    };
  },
};
</script>

<style scoped>
.number-updown-container {
  display: flex;
}
.number-updown-mutation {
  padding: 0 1rem;
}
.number-updown-view {
  border: 0;
  width: 5rem;
  text-align: center;
}
</style>
