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
export default {
  emits: ['countNumber'],
  setup(props, { emit }) {
    const number = ref(0);

    const lClick = () => {
      if (number.value <= 0) return;
      number.value -= 1;
      emit('countNumber', number.value);
    };
    const RClick = () => {
      if (number.value > 500) return;
      number.value += 1;
      emit('countNumber', number.value);
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
  cursor: pointer;
  display: flex;
}
.number-updown-mutation {
  cursor: pointer;
}
.number-updown-view {
  border: 0;
  width: 3rem;
  text-align: center;
}
</style>
