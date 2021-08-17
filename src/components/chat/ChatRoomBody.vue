<template>
  <div>
    <div class="chat-room-container">
      <div class="day-divider">
        <div class="date-text">2020년 12월17일</div>
      </div>
      <div id="for-scroll-1" class="left">
        <div class="template-message message-form">
          <div class="chat-room-profile">
            <img
              class="profile-image"
              src="https://dnvefa72aowie.cloudfront.net/origin/profile/202009/64EB49B6691492AED2A17158BEA208404BCEA5E274518F5FE3DB300CF688DADC.jpg?q=82&amp;s=80x80&amp;t=crop"
              alt="당근이"
            />
          </div>
          <div>
            <div class="chat-room-message-data">
              <div class="temp-message-wrap">
                <p class="pre-text">
                  박동현님, 반갑습니당! 동네 이웃과 거래하기 전, 첫 가이드를 꼭
                  읽어보세요:)
                </p>
                <div class="temp-button">모바일에서 확인해주세요.</div>
              </div>
            </div>
          </div>
          <div class="chat-room-message-time">
            <div class="message-date">오전 4:35</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chat-room-container {
  display: block;
  overflow: hidden auto;
  padding: 0px 20px;
}
.day-divider {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 20px 0px;
  color: var(--grey-font-color);
  .date-text {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    border: 1px solid rgb(234, 235, 238);
    box-sizing: border-box;
    border-radius: 14px;
    padding: 0px 12px;
    font-size: 12px;
  }
}

.message-form .template-message {
  margin-bottom: 16px;
}
.message-form {
  display: flex;
  justify-content: flex-start;
  padding: 4px;
}
.chat-room-profile {
  margin-right: 8px;
  .profile-image {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
}
.chat-room-message-data {
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  width: 250px;
  font-size: 0px;
}
.temp-message-wrap {
  display: block;
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}

.chat-room-message-time {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 0px 4px;
  .css-12zo68g .message-date {
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: rgb(134, 139, 148);
  }
}
</style>
