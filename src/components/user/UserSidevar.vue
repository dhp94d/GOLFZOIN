<template>
  <div class="sidebar-container">
    <div class="sidebar-header"></div>
    <nav class="sidebar-body">
      <div :class="type === 'user' ? 'current-sidebar-tap' : 'sidebar-tap'">
        <router-link to="/user/search">
          <i class="fa fa-user fa-2x" aria-hidden="true"></i>
          <div>유저</div>
        </router-link>
      </div>
      <div
        :class="type === 'following' ? 'current-sidebar-tap' : 'sidebar-tap'"
      >
        <router-link to="/user/following">
          <i class="fa fa-users fa-2x" aria-hidden="true"></i>
          <div>팔로잉</div></router-link
        >
      </div>
      <div :class="type === 'follower' ? 'current-sidebar-tap' : 'sidebar-tap'">
        <router-link to="/user/follower">
          <i class="fa fa-users fa-2x" aria-hidden="true"></i>
          <div>팔로워</div></router-link
        >
      </div>
      <div :class="type === 'alarm' ? 'current-sidebar-tap' : 'sidebar-tap'">
        <router-link to="/user/alarm">
          <i class="fa fa-bell fa-2x" aria-hidden="true"></i>
          <div>알림</div></router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: { type: String },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  font-size: bold;
  height: 90vh;
}
.sidebar-body {
  background-color: rgb(234, 235, 238);
  border: 1px solid rgba(33, 33, 36, 0.07);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: rgb(33, 33, 36);
  width: 4vw;
  align-items: center;
  letter-spacing: -0.32px;
  text-size-adjust: 100%;
  height: 83vh;
  div a {
    color: gray;
    text-decoration: none;
  }
  i {
    padding-top: 10px;
    position: relative;
    display: inline-block;
    color: #006eb7;
  }
}
.current-sidebar-tap {
  text-align: center;
  align-items: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: bold;
  border: 1px solid rgba(33, 33, 36, 0.07);
  background-color: #d8d8d8;
  a div {
    color: black;
  }
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
.sidebar-tap {
  text-align: center;
  align-items: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: bold;
  a {
    &:hover {
      color: black;
    }
  }
  &:hover {
    color: black;
    cursor: pointer;
    font-weight: bold;
  }
}
.sidebar-header {
  position: relative;
  display: flex;
  width: 100%;
  height: 7vh;
  background-color: rgb(234, 235, 238);
  border: 1px solid rgba(33, 33, 36, 0.07);
  border-bottom: 1px solid $gray;
  padding: 0px 20px;
  -webkit-box-align: center;
  align-items: center;
}
</style>
