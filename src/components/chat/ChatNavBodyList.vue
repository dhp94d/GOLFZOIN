<template>
  <li>
    <a class="chat-nav-room"
      ><div class="chat-nav-room-profile">
        <img
          class="profile-image"
          src="https://dnvefa72aowie.cloudfront.net/origin/profile/202009/64EB49B6691492AED2A17158BEA208404BCEA5E274518F5FE3DB300CF688DADC.jpg?q=82&amp;s=80x80&amp;t=crop"
          alt="profile"
        />
      </div>
      <div class="chat-nav-room-body">
        <div class="preview-title-wrap">
          <span class="nickname">박동현</span>
        </div>
        <div class="preview-description"></div></div
    ></a>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
li {
  display: list-item;
  text-align: -webkit-match-parent;
  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
}
.chat-nav-room {
  display: flex;
  padding: 16px;
  height: 72px;
  border-bottom: 1px solid var(--divider-line);
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: perspective(1px) translateZ(0px);
  transition: color 0.5s ease 0s;
  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0px;
    background-color: rgb(242, 243, 246);
    transform: scale(0);
    transition-property: transform;
    transition-duration: 0.5s;
  }
}
.chat-nav-room-profile {
  margin-right: 8px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.chat-nav-room-body {
  flex: 1 0 0%;
  width: 0px;
}
.preview-title-wrap {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .nickname {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 20px;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: -0.02em;
    color: #212124;
  }
  .css-1kscqop .preview-title-wrap .sub-text {
    margin-left: 4px;
    color: #868b94;
    font-size: 12px;
  }
}
.preview-description {
  display: block;
  height: 20px;
  font-size: 13px;
  color: var(--gray-700);
}
</style>
