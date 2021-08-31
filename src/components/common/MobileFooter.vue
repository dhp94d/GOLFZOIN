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
      <router-link to="/user/search" class="footer-tap">
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
      <div class="footer-tap" @click="userToggle">
        <div class="footer-title-container">
          <div class="icon">
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
                d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"
              ></path>
            </svg>
          </div>
        </div>
        <div v-if="openUser">
          <EditUser @toggle="userToggle"></EditUser>
        </div>
        <div class="footer-title">프로필</div>
      </div>
    </div>
  </nav>
</template>

<script>
import EditUser from '@/components/user/EditUser.vue';
import HeaderSearchBar from '@/components/header/HeaderSearchBar.vue';
import { ref } from 'vue';

export default {
  components: {
    EditUser,
    HeaderSearchBar,
  },
  setup() {
    const showSearch = ref(false);
    const openUser = ref(false);
    const userToggle = () => {
      if (openUser.value) {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      } else {
        document.querySelector('body')?.classList.add('overflow-hidden');
      }
      openUser.value = !openUser.value;
    };
    const showSearchButton = () => {
      showSearch.value = !showSearch.value;
    };
    return {
      openUser,
      userToggle,
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
