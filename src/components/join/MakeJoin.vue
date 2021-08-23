<template>
  <div>
    <Modal @toggle="toggle">
      <template #header> </template>
      <template #body>
        <div class="make-join-change-type">
          <div @click="joinType = true" :class="joinType ? 'bold' : ''">
            온라인 조인
          </div>
          <div @click="joinType = false" :class="joinType ? '' : 'bold'">
            오프라인 조인
          </div>
        </div>
        <div v-if="joinType">
          <MakeOnlineJoin></MakeOnlineJoin>
        </div>
        <div v-else>
          <MakeOfflineJoin></MakeOfflineJoin>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import MakeOfflineJoin from '@/components/join/MakeOfflineJoin.vue';
import MakeOnlineJoin from '@/components/join/MakeOnlineJoin.vue';
import Modal from '@/components/common/Modal.vue';
import { ref } from '@vue/reactivity';

export default {
  components: {
    MakeOfflineJoin,
    MakeOnlineJoin,
    Modal,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const joinType = ref(true);
    const toggle = () => {
      emit('toggle');
    };
    return {
      joinType,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.make-join-change-type {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: bold;
  color: gray;
  padding-bottom: 2rem;
  :hover {
    cursor: pointer;
  }
}
.bold {
  color: #333333;
}
</style>
