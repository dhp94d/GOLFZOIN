<template>
  <nav class="sidebar">
    <a href="/"
      ><img
        class="selected profile-image"
        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256_disabled-97ac2510cb2860b9e37caf23beb1e8e0ca130152a119b65402c4673af18bf2a1.png"
        alt="my-account-profile"
    /></a>
    <div>유저</div>
    <div>팔로우</div>
    <div>팔로워</div>
    <div>알림</div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: rgb(234, 235, 238);
  border: 1px solid rgba(33, 33, 36, 0.07);
  box-sizing: border-box;
  color: rgb(33, 33, 36);
  display: flex;
  height: 8vh;
  width: 30vw;
  justify-content: space-around;
  align-items: center;

  letter-spacing: -0.32px;
  text-size-adjust: 100%;
  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    img {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 44px;
    }
  }
}
</style>
