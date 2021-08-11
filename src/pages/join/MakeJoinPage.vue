<template>
  <div class="make-join-container">
    <div class="make-join-change-type">
      <div @click="joinType = true">온라인 조인</div>
      <div @click="joinType = false">오프라인 조인</div>
    </div>
    <div>
      <div v-if="joinType">
        <MakeOnlineJoin></MakeOnlineJoin>
      </div>
      <div v-else>
        <MakeOfflineJoin></MakeOfflineJoin>
      </div>
    </div>
  </div>
</template>

<script>
import MakeOfflineJoin from '@/components/join/MakeOfflineJoin.vue';
import MakeOnlineJoin from '@/components/join/MakeOnlineJoin.vue';
import { ref } from '@vue/reactivity';

export default {
  components: {
    MakeOfflineJoin,
    MakeOnlineJoin,
  },
  setup() {
    const joinType = ref(true);

    return {
      joinType,
    };
  },
};
</script>

<style lang="scss" scoped>
.make-join-container {
  margin: auto;
}
.make-join-change-type {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: bold;
  color: gray;
  :hover {
    cursor: pointer;
    color: black;
  }
  div {
    box-shadow: 0 4px 4px -4px black;
  }
}
</style>
