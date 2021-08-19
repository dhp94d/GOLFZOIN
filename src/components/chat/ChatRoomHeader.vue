<template>
  <div class="chat-room-header">
    <div class="chat-header-profile">
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/profile/202009/64EB49B6691492AED2A17158BEA208404BCEA5E274518F5FE3DB300CF688DADC.jpg?q=82&amp;s=80x80&amp;t=crop"
        alt="당근이"
      />
      <div class="main-title"><span>박동현</span></div>
    </div>
    <div class="css-6cujsz">
      <div class="more-button-wrapper pointer-cursor">
        <svg
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.0002 3.19998C2.7152 3.19998 3.3002 2.61498 3.3002 1.89998C3.3002 1.18498 2.7152 0.599976 2.0002 0.599976C1.2852 0.599976 0.700195 1.18498 0.700195 1.89998C0.700195 2.61498 1.2852 3.19998 2.0002 3.19998Z"
            fill="#212124"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.0002 6.70001C1.2852 6.70001 0.700195 7.28501 0.700195 8.00001C0.700195 8.71501 1.2852 9.30001 2.0002 9.30001C2.7152 9.30001 3.3002 8.71501 3.3002 8.00001C3.3002 7.28501 2.7152 6.70001 2.0002 6.70001Z"
            fill="#212124"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.0002 12.8C1.2852 12.8 0.700195 13.385 0.700195 14.1C0.700195 14.815 1.2852 15.4 2.0002 15.4C2.7152 15.4 3.3002 14.815 3.3002 14.1C3.3002 13.385 2.7152 12.8 2.0002 12.8Z"
            fill="#212124"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chat-room-header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 64px;
  min-height: 64px;
  border-bottom: 1px solid rgba(33, 33, 36, 0.07);
  padding: 0px 20px;
}
.chat-header-profile {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  img {
    margin-right: 12px;
    width: 40px;
    height: 40px;
    border: 1px solid var(--profile-image-border);
    border-radius: 50%;
  }
  .main-title {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
}
.more-button-wrapper {
  border-radius: 4px;
  width: 24px;
  text-align: center;
  transition: background-color 0.3s ease 0s;
}
</style>
