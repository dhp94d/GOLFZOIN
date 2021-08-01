<template>
  <div>
    <div class="dropdown-title" @click="toggleButton">
      <slot name="header"></slot>
    </div>
    <div class="dropdown-body" v-show="toggle">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: {
    marginTop: String,
  },
  setup() {
    const toggle = ref(false);

    const toggleButton = () => {
      toggle.value = !toggle.value;
    };

    return {
      toggleButton,
      toggle,
    };
  },
};
</script>

<style scoped>
.dropdown-title {
  position: block;
  cursor: pointer;
}
.dropdown-body {
  position: absolute;
  margin-top: v-bind(marginTop + 'rem');
  padding: 0.5rem;
  border-radius: 1rem;
  align-content: center;
  background: white;

  box-shadow: 0px 0px 1px 1px #ebebeb;
}
</style>
