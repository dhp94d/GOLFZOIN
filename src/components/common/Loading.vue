<template>
  <div v-if="loading">
    <teleport to="#loading">
      <div class="modal-wrapper">
        <div class="spinner-border loading" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
}
</style>
