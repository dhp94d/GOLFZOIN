<template>
  <teleport to="#teleport-modal">
    <div class="alert toast-box" :class="`alert-${type}`" role="alert">
      {{ message }}
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success',
    },
  },
};
</script>

<style>
.toast-box {
  position: fixed;
  z-index: 5000;
  top: 10px;
  right: 10px;
}
</style>
