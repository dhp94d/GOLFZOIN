<template>
  <div class="dropdown-container">
    <div class="dropdown-title" @click="toggleButton">
      <slot name="header"></slot>
    </div>
    <div :class="bottom ? 'dropup-body' : 'dropdown-body'" v-show="toggle">
      <slot name="body"> </slot>
      <div class="dropdown-background" @click="toggleButton"></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: {
    bottom: String,
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
  background: white;
  box-shadow: 0px 0px 1px 1px #ebebeb;
  z-index: 5;
}
.dropdown-background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}
.dropup-body {
  position: absolute;
  padding: 0.5rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0px 0px 1px 1px #ebebeb;
  z-index: 5;
  bottom: 100%;
  right: 0;
}
</style>
