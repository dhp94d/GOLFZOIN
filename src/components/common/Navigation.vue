<template>
  <div>
    <Path></Path>
    <div class="nav-tap">
      <div v-for="(tap, index) in taps" :key="`nav-path${index}`">
        <li>
          <router-link :to="`${tap[1]}`">{{ tap[0] }}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const items = ['main', '유저', '대화'];
    const taps = [
      ['온라인 조인', '/onlineJoin'],
      ['오프라인 조인', '/offlineJoin'],
      ['유저', '/user'],
      ['일정관리', '/calendar'],
    ];
    return {
      items,
      taps,
    };
  },
});
</script>

<style scope>
.nav-tap {
  display: flex;
  margin-top: 1rem;
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
  border-top: 2px solid black;
  padding-top: 1rem;
  text-decoration: none;
}
.nav-tap div li a {
  text-decoration: none;
  font-weight: bold;
  color: gray;
}
</style>
