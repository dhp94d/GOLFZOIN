<template>
  <div>
    <div v-if="simple">
      <div class="thumbnail" @click="moveOnlineDetail(id)">
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
    <div v-else>
      <div class="thumbnail" @click="moveOfflineDetail(id)">
        <img :src="thumbnail" />
        <div class="thumbnail-title">
          <h5>{{ title }}</h5>
          <div class="thumbnail-address">
            위치:
            {{ place?.length > 20 ? place.slice(0, 20) + '...' : place }}
          </div>
          <div class="thumbnail-time">
            <div>{{ date }}</div>
            <div>{{ time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { useJoin } from '@/composable/join';
export default {
  props: {
    title: String,
    time: String,
    date: String,
    totalcount: Number,
    body: String,
    thumbnail: String,
    simple: Boolean,
    place: String,
    id: String,
  },
  setup() {
    const router = useRouter();
    const { updateTarget } = useJoin();

    const moveOnlineDetail = (id) => {
      updateTarget(id);
      router.push({
        name: 'OnlineDetailJoin',
      });
    };

    const moveOfflineDetail = (id) => {
      updateTarget(id);
      router.push({
        name: 'OfflineDetailJoin',
      });
    };
    return {
      moveOnlineDetail,
      moveOfflineDetail,
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
</style>
