<template>
  <nav class="footer-container">
    <teleport to="#teleport-modal">
      <div class="footer-searchbar" v-show="showSearch">
        <div class="move-join">
          <router-link to="/join/onlinejoin">
            <div @click="showSearchButton">온라인 조인</div>
          </router-link>
          <router-link to="/join/offlinejoin">
            <div @click="showSearchButton">오프라인 조인</div>
          </router-link>
        </div>
        <span>조인을 검색하세요</span>
        <HeaderSearchBar @toggle="showSearchButton"></HeaderSearchBar>
      </div>
    </teleport>
    <div class="footer-div"></div>
    <div class="footer-wrapper">
      <router-link to="" class="footer-tap">
        <div class="footer-title-container" @click="showSearchButton">
          <div class="icon">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 24px;
                width: 24px;
                stroke: currentcolor;
                stroke-width: 4;
                overflow: visible;
              "
            >
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="footer-title">검색</div>
      </router-link>
      <router-link to="/user/following" class="footer-tap">
        <div class="footer-title-container">
          <div class="icon">
            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
          </div>
        </div>
        <div class="footer-title">유저</div>
      </router-link>
      <router-link to="/calendar" class="footer-tap">
        <div class="footer-title-container">
          <div class="icon" style="top: -1px">
            <i class="fa fa-calendar fa-3x" aria-hidden="true"></i>
          </div>
        </div>
        <div class="footer-title">일정관리</div>
      </router-link>
      <router-link to="/chat" class="footer-tap"
        ><div class="footer-title-container">
          <div class="icon" style="top: 1px">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                height: 24px;
                width: 24px;
                fill: currentcolor;
              "
            >
              <path
                d="m26 2c2.6887547 0 4.8818181 2.12230671 4.9953805 4.78311038l.0046195.21688962v14c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-5.845l-4.1548949 5.0792674-4.1561051-5.0792674h-5.844c-2.61406707 0-4.75959878-2.0060384-4.98113724-4.5626572l-.01424325-.2204532-.00461951-.2168896v-14c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm0 2h-20c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v14c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h6.7918643l3.2071357 3.92 3.2080542-3.92h6.7929458c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-14c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="footer-title">채팅</div>
      </router-link>
      <div class="footer-tap">
        <HeaderUserIcon :bottom="true"></HeaderUserIcon>
        <div class="footer-title">프로필</div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderSearchBar from '@/components/header/HeaderSearchBar.vue';
import HeaderUserIcon from '@/components/header/HeaderUserIcon.vue';
import { ref } from 'vue';

export default {
  components: {
    HeaderSearchBar,
    HeaderUserIcon,
  },
  setup() {
    const showSearch = ref(false);
    const showSearchButton = () => {
      showSearch.value = !showSearch.value;
    };
    return {
      showSearchButton,
      showSearch,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-searchbar {
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  height: 40vh;
  bottom: 3.5rem;
  border: 2px solid rgba(33, 33, 36, 0.07);
  left: 0;
  right: 0;
  z-index: 0;
  align-items: center;
  padding-top: 1rem;
}
.footer-container {
  border-top: 2px solid rgba(33, 33, 36, 0.07);
  padding-top: 2px;
  display: flex;
}
.footer-div {
  max-width: 100%;
  width: 100%;
  position: absolute;
  bottom: 149px;
  left: 0px;
  &:hover {
    color: black;
  }
}
.footer-wrapper {
  flex: 1 0 auto;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 560px;
}
.footer-tap {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  border: 0px;
  max-width: 20%;
  min-width: 0px;
  overflow-wrap: break-word;
  hyphens: auto;
  padding: 0 2px;
  color: black;
}
.footer-title-container {
  display: flex;
}
.footer-title {
  font-size: 0.7rem;
  padding-bottom: 0.3rem;
}
.icon {
  width: 30px;
  height: 30px;
  display: flex;
  font-size: 0.5rem;

  justify-content: center;

  align-items: center;
  margin-bottom: 2px;
  color: #b0b0b0;
  position: relative;
}
.move-join {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  gap: 3rem;
  font-weight: bold;
  a {
    color: gray;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
}
</style>
