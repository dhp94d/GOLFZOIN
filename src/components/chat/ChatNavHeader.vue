<template>
  <div class="chat-sidebar-header">
    <div>박동현</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoprd>
.chat-sidebar-header {
  position: relative;
  display: flex;
  height: 64px;
  min-height: 64px;
  border-bottom: 1px solid $gray;
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
