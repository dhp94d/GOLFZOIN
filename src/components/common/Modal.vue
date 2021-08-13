<template>
  <div>
    <teleport to="#modal" />
    <div class="modal-wrapper">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <button type="button" class="btn-close" @click="toggle"></button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
    <teleport />
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

<style lang="scss" scoprd>
.modal-wrapper {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  z-index: 1100;
}
</style>
