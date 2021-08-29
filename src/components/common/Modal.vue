<template>
  <div>
    <teleport to="#teleport-modal">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header"> </slot>
              <button type="button" class="btn-close" @click="toggle"></button>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  emits: ['toggle'],
  setup(props, { emit }) {
    const toggle = () => {
      emit('toggle');
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  z-index: 10;
}
</style>
