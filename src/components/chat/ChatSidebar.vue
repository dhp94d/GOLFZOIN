<template>
  <nav class="sidebar">
    <a href="/"
      ><img
        class="selected profile-image"
        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256_disabled-97ac2510cb2860b9e37caf23beb1e8e0ca130152a119b65402c4673af18bf2a1.png"
        alt="my-account-profile"
        aria-disabled="true"
    /></a>
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
  flex-direction: column;
  height: 84vh;
  width: 3.8vw;
  letter-spacing: -0.32px;
  line-height: 24px;
  padding: 20px 13px;
  row-gap: 20px;
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
