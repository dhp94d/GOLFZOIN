<template>
  <div class="header-nav-tap">
    <div>
      <router-link to="/join/onlinejoin">
        <span>온라인 조인</span>
      </router-link>
    </div>
    <div>
      <router-link to="/join/offlinejoin">
        <span>오프라인 조인</span>
      </router-link>
    </div>
    <div>
      <span @click="makejoinToggle">조인 만들기</span>
      <div v-if="toggle">
        <MakeJoin @toggle="makejoinToggle"></MakeJoin>
      </div>
    </div>
  </div>
</template>

<script>
import MakeJoin from '@/components/join/MakeJoin.vue';
import { ref } from 'vue';
export default {
  components: {
    MakeJoin,
  },
  props: {
    navColor: String,
    hoverColor: String,
  },

  setup() {
    const toggle = ref(false);

    const makejoinToggle = () => {
      if (toggle.value) {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      } else {
        document.querySelector('body')?.classList.add('overflow-hidden');
      }
      toggle.value = !toggle.value;
    };
    return {
      makejoinToggle,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  height: 100%;
  text-size-adjust: 100%;
  width: 35%;
}
.header-nav-tap {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  span {
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 0 1.2rem;
    color: v-bind(navColor);
    &:hover {
      color: v-bind(hoverColor);
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
