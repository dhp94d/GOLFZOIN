<template>
  <div class="user-sidebar-header">
    <div>{{ title }}</div>
    <slot name="option"> </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoprd>
.user-sidebar-header {
  position: relative;
  display: flex;
  height: 7vh;
  min-height: 64px;
  border-bottom: 1px solid $gray;
  justify-content: space-between;
  padding: 0px 20px;
  -webkit-box-align: center;
  align-items: center;
  div {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
  }
}
</style>
