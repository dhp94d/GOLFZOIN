<template>
  <div class="make-join-container">
    <div class="make-join-change-type">
      <div @click="joinType = true">온라인 조인</div>
      <div @click="joinType = false">오프라인 조인</div>
    </div>
    <div v-if="joinType">
      <MakeOnlineJoin></MakeOnlineJoin>
    </div>
    <div v-else>
      <MakeOfflineJoin></MakeOfflineJoin>
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

<style>
.make-join-container {
  margin: 1rem 20rem;
}
.make-join-change-type {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1.3rem;
  font-size: 1.5rem;
  color: gray;
}
.make-join-change-type div:hover {
  border-radius: 1rem;
  cursor: pointer;
  color: black;
}
</style>
