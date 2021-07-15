<template>
  <div class="nav-tap">
    <div v-for="(tap, index) in taps" :key="`nav-path${index}`">
      <li>
        <router-link :to="`${tap[1]}`">{{ tap[0] }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const taps = [
      ['팔로우', '/follow'],
      ['대화', '/chat'],
      ['알림', '/notification'],
    ];
    return {
      taps,
    };
  },
});
</script>

<style scope>
.nav-tap {
  display: flex;
  justify-content: space-around;
  align-content: center;
  list-style: none;
  font-size: 1rem;
  width: 100%;
  height: 3.5rem;
}
.nav-tap div {
  width: 100%;
  border: 1px solid rgb(209, 209, 209);
  border-bottom: 2px solid black;
  padding-top: 1rem;
  text-decoration: none;
}
.nav-tap div li a {
  text-decoration: none;
  font-weight: bold;
  color: gray;
}
</style>
