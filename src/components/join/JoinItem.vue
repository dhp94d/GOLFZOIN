<template>
  <div>
    <div v-if="showDetailJoin">
      <OnlineJoinDetail @toggle="detailJoinToggle"></OnlineJoinDetail>
    </div>
    <div class="thumbnail" @click="updateRoomNo(roomNo)">
      <img :src="thumbnail" />
      <div class="thumbnail-title">
        <h5>{{ title }}</h5>
        <div class="thumbnail-time">
          <div>{{ date }}</div>
          <div>{{ time }}</div>
        </div>
        <div class="thumbnail-body">
          <p>
            {{ body?.length > 40 ? body.slice(0, 40) + '...' : body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OnlineJoinDetail from '@/components/join/OnlineJoinDetail.vue';
import { useJoin } from '@/composable/join';
import { ref } from 'vue';
export default {
  props: {
    title: String,
    time: String,
    date: String,
    totalcount: String,
    body: String,
    thumbnail: String,
    simple: Boolean,
    place: String,
    roomNo: String,
  },
  components: {
    OnlineJoinDetail,
  },
  setup() {
    const showDetailJoin = ref(false);
    const { updateTarget } = useJoin();

    const detailJoinToggle = () => {
      showDetailJoin.value = !showDetailJoin.value;
    };
    const updateRoomNo = (roomNo) => {
      updateTarget(roomNo);
      detailJoinToggle();
    };
    return {
      updateRoomNo,
      showDetailJoin,
      detailJoinToggle,
    };
  },
};
</script>
<style lang="scss" scoped>
.thumbnail {
  padding: 0.3rem;
  border-radius: 1rem;
  object-fit: cover;
  height: 24rem;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 1px 10px 1px #000;
    background-color: rgba(33, 33, 36, 0.07);
    position: relative;
  }

  img {
    display: flex;
    border: 1px solid #b8b8b8;
    border-radius: 1rem;
    width: 18rem;
    height: 16rem;
    margin: auto;
  }
}
.thumbnail-title {
  padding: 0.5rem;
  width: 18rem;
  h5 {
    font-weight: 600;
    color: #525252;
  }
}
.thumbnail-time {
  display: flex;
  gap: 0 0.5rem;
  justify-content: flex-end;
}

.thumbnail-address {
  display: flex;
  justify-content: flex-start;
  text-align: end;
}
.thumbnail-body {
  display: flex;
  justify-content: flex-start;
  text-align: start;
  color: #515151;
}

@media (max-width: 1400px) {
  .thumbnail {
    padding: 0.3rem;
    border-radius: 1rem;
    object-fit: cover;
    height: 24rem;
    &:hover {
      cursor: pointer;
      box-shadow: 2px 1px 10px 1px #000;
      background-color: rgba(33, 33, 36, 0.07);
      position: relative;
    }

    img {
      display: flex;
      border: 1px solid #b8b8b8;
      border-radius: 1rem;
      width: 18rem;
      height: 16rem;
      margin: auto;
    }
  }
}
</style>
