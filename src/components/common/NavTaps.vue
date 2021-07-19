<template>
  <div class="nav-tap">
    <div
      style="width: 100%"
      v-for="(tap, index) in taps"
      :key="`NavTaps${index}`"
    >
      <div class="container">
        <router-link :to="`${tap.link}`">
          <div>
            {{ tap.title }}
          </div>
        </router-link>
      </div>
      <div v-if="tap.detailList" class="detail-dropdown">
        <div
          class="detail-list"
          v-for="(detail, index) in tap.detailList"
          :key="`NavDetail${index}`"
        >
          <router-link :to="`${detail.link}`">
            <div>
              {{ detail.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    taps: Array,
  },
});
</script>

<style scoped>
.nav-tap {
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;
  align-content: center;
  list-style: none;
  font-size: 1rem;
  width: 100%;
}
.nav-tap:hover {
  cursor: pointer;
}
.container {
  width: 100%;
  border: 1px solid rgb(209, 209, 209);
  border-top: 3px solid black;
  padding: 1rem 0;
}
.nav-tap div a {
  width: 100%;
  text-decoration: none;
  font-weight: bold;
  color: gray;
}
.detail-dropdown {
  display: none;
  position: fixed;
  height: 13%;
  width: 17.8%;
  background-color: white;
  border: 1px solid rgb(209, 209, 209);
  z-index: 1;
}
.nav-tap:hover .detail-dropdown {
  display: block;
}
.detail-list {
  padding-top: 1rem;
}
</style>
