<template>
  <div class="join-page-offline-container">
    <div class="join-page-offline-map">
      <div class="join-page-offline-body">
        <div>{{ offlineJoinData?.length }}개 이상의 조인</div>
        <div class="join-page-offline-title">오프라인 조인</div>
        <div>
          <Searchbar :join="'offline'"></Searchbar>
        </div>
      </div>
      <br />
      <div class="join-page-offline-list">
        <div
          v-for="(offlinejoin, index) in offlineJoinData"
          :key="`offlinejoin${index}`"
        >
          <hr />
          <div class="offline-box" @click="offlineJoinClick(offlinejoin)">
            <img :src="offlinejoin.thumbnail" />
            <div class="offline-box-detail">
              <div class="offline-box-gray-color">
                {{ offlinejoin.date }}&nbsp;
                {{ offlinejoin.time }}
              </div>
              <h5>
                {{
                  offlinejoin.title.length > 22
                    ? offlinejoin.title.slice(0, 22) + '...'
                    : offlinejoin.title
                }}
              </h5>
              <div>
                <div>{{ offlinejoin.place }}</div>
              </div>
              <div class="offline-box-body">
                {{
                  offlinejoin.body.length > 40
                    ? offlinejoin.body.slice(0, 40) + '...'
                    : offlinejoin.body
                }}
              </div>
              <div>
                인원&nbsp;:{{ offlinejoin.members?.length }}/{{
                  offlinejoin.totalcount
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="map"></div>
    <div v-if="showDetailJoin">
      <OfflineJoinDetail @toggle="detailJoinToggle"></OfflineJoinDetail>
    </div>
  </div>
</template>
<script>
import Searchbar from '@/components/common/Searchbar.vue';
import { ref, onMounted, watch } from 'vue';
import { useJoin } from '@/composable/join';
import { mwOfflineJoinList } from '@/api/middleware/mainJoin.ts';
import OfflineJoinDetail from '@/components/join/OfflineJoinDetail.vue';
import { useSearch } from '@/composable/search';

export default {
  components: {
    OfflineJoinDetail,
    Searchbar,
  },
  setup() {
    const { updateTarget } = useJoin();
    const { SearchDate, SearchPNumber, SearchData, SearchFollow } = useSearch();
    const offlineJoinData = ref([]);
    const mapTypeControl = new kakao.maps.MapTypeControl();
    const zoomControl = new kakao.maps.ZoomControl();
    const bounds = new kakao.maps.LatLngBounds();
    const positions = ref([]);
    const title = ref([]);
    const showDetailJoin = ref(false);

    watch([SearchDate, SearchPNumber, SearchData, SearchFollow], () => {
      getOfflineData();
      initMap();
    });

    const getOfflineData = async () => {
      const res = await mwOfflineJoinList(process.env.VUE_APP_SERVER_TYPE, {
        lat: '37.5230059400269',
        lon: '127.054788716295',
        size: '3',
      });
      offlineJoinData.value.push(...res);
      offlineJoinData.value.map((join, i) => {
        title.value.push(join.title);
        positions.value.push(new kakao.maps.LatLng(join.lat, join.lon));
      });
    };

    const offlineJoinClick = (offlinejoin) => {
      updateTarget(offlinejoin.roomNo);
      detailJoinToggle();
    };

    const initMap = () => {
      const container = document.querySelector('#map');
      const options = {
        center: new kakao.maps.LatLng(37.4645001795391, 126.919613685063),
        level: 7,
      };

      const map = new kakao.maps.Map(container, options);

      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      for (let i = 0; i < positions.value.length; i++) {
        // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다.
        var marker = new kakao.maps.Marker({
          map: map,
          position: positions.value[i],
        });

        let content =
          '<div class="join-page-offline-customoverlay" >' +
          '  <div>' +
          `    <span class="join-page-offline-customoverlay-title">${title.value[i]}</span>` +
          '  </div>' +
          '</div>';

        let customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: positions.value[i],
          content: content,
          yAnchor: 1,
          clickable: true,
        });

        (function (customOverlay) {
          // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
          kakao.maps.event.addListener(customOverlay, 'click', function () {});
        })(customOverlay);

        bounds.extend(positions.value[i]);
      }
    };
    const detailJoinToggle = () => {
      showDetailJoin.value = !showDetailJoin.value;
    };
    onMounted(async () => {
      await getOfflineData();
      initMap();
    });
    return {
      offlineJoinData,
      offlineJoinClick,
      showDetailJoin,
      detailJoinToggle,
    };
  },
};
</script>

<style lang="scss">
.join-page-offline-map {
  flex: 1;
}
.join-page-offline-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.join-page-offline-filter {
  margin-bottom: 2rem;
}
.join-page-offline-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 1rem;
}
.join-page-offline-body {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 2rem;
}
.offline-box {
  display: flex;
  cursor: pointer;
  word-break: break-all;
  color: #717188;
  img {
    border: 1px solid black;
    border-radius: 1rem;
    width: 20rem;
    height: 15rem;
  }
  h5 {
    color: black;
  }
}
.offline-box-detail {
  display: flex;
  flex-direction: column;
  word-break: break-all;
  white-space: pre-line;
  padding: 0 1rem;
}
.offline-box-body {
  color: black;
  height: 8rem;
  padding: 1rem 0;
}
#map {
  position: fixed;
  right: 0;
  width: 58vw;
  height: 90vh;
  flex: 1;
  object-fit: cover;
}
.join-page-offline-customoverlay {
  position: relative;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  float: left;
  &:nth-of-type(n) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  div {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    background: #3396ff;
    background: #3396ff
      url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
      no-repeat right 14px center;
  }
  :after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
  }
}
.join-page-offline-customoverlay .join-page-offline-customoverlay-title {
  display: block;
  text-align: center;
  background: #fff;
  margin-right: 35px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
}

@media (max-width: 1500px) {
  .offline-box {
    flex-direction: column;
  }
}

@media (max-width: 1000px) {
  #map {
    display: inline-flex;
    right: 1;
    top: 1;
    height: 50vh;
    width: 100%;
  }
}
</style>
