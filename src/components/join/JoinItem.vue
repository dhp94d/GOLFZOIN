<template>
  <div>
    <div v-if="simple">
      <div class="thumbnail" @click="moveOnlineDetail(id)">
        <img :src="thumbnail" />
        <div class="thumbnail-title">
          <h5>{{ title }}</h5>
          <div class="thumbnail-time">
            <div>모임시각: {{ date }}</div>
            <div>{{ time }}</div>
          </div>
          <p>
            {{
              detailText?.length > 40
                ? detailText.slice(0, 40) + '...'
                : detailText
            }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="thumbnail" @click="moveOfflineDetail(id)">
        <img :src="thumbnail" />
        <div class="thumbnail-title">
          <h5>{{ title }}</h5>
          <div class="thumbnail-address">
            주소:
            {{
              addressName?.length > 20
                ? addressName.slice(0, 20) + '...'
                : addressName
            }}
          </div>
          <div class="thumbnail-time">
            <div>모임시각: {{ date }}</div>
            <div>{{ time }}</div>
          </div>
          <div class="thumbnail-participants">
            <div>인원: {{ participants }}/{{ maximum }}</div>
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
    maximum: String,
    detailText: String,
    thumbnail: String,
    simple: Boolean,
    participants: String,
    addressName: String,
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
  border: 1px solid #b8b8b8;
  border-radius: 1rem;
  object-fit: cover;
  height: 26rem;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 0 gray;
    position: relative;
    top: 2px;
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

.thumbnail-participants {
  display: flex;
  justify-content: flex-end;
}
.thumbnail-address {
  display: flex;
  justify-content: flex-end;
  text-align: end;
}
</style>
