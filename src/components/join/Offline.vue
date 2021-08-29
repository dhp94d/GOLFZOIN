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
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useJoin } from '@/composable/join';
import { mwOfflineJoinList } from '@/api/middleware/mainJoin.ts';
import { getUserFromCookie } from '@/composable/cookies';
import OfflineJoinDetail from '@/components/join/OfflineJoinDetail.vue';
import { useSearch } from '@/composable/search';

export default {
  components: {
    OfflineJoinDetail,
    Searchbar,
  },
  setup() {
    const { updateTarget } = useJoin();
    const { SearchDate, SearchPNumber, SearchAddress, init } = useSearch();
    const offlineJoinData = ref([]);
    const mapTypeControl = new kakao.maps.MapTypeControl();
    const zoomControl = new kakao.maps.ZoomControl();
    const positions = ref([]);
    const title = ref([]);
    const showDetailJoin = ref(false);
    const mapSize = ref(7);

    const userData = ref(JSON.parse(getUserFromCookie()));
    const lat = ref(userData.value.lat);
    const lon = ref(userData.value.lon);

    watch([SearchDate, SearchPNumber, SearchAddress.value, mapSize], () => {
      lat.value = SearchAddress.value.longitude;
      lon.value = SearchAddress.value.latitude;

      getOfflineData();
    });

    const getOfflineData = async () => {
      const res = await mwOfflineJoinList(process.env.VUE_APP_SERVER_TYPE, {
        lat: lat.value,
        lon: lon.value,
        size: mapSize.value,
        count: SearchPNumber.value,
        date: SearchDate.value,
      });
      offlineJoinData.value = res;
      title.value = [];
      positions.value = [];
      offlineJoinData.value.map((join) => {
        join = { ...join, lat: join.latitude, lng: join.longitude };
        title.value.push(join.title);
        positions.value.push({ lat: join.lat, lng: join.lng });
      });
      initMap();
    };
    const offlineJoinClick = (offlinejoin) => {
      updateTarget(offlinejoin.roomNo);
      detailJoinToggle();
    };

    const initMap = () => {
      console.log(lat.value, lon.value);
      const container = document.querySelector('#map');
      const options = {
        center: new kakao.maps.LatLng(lon.value, lat.value),
        level: mapSize.value,
      };

      const map = new kakao.maps.Map(container, options);

      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      kakao.maps.event.addListener(map, 'zoom_changed', function () {
        // 지도의 현재 레벨을 얻어옵니다
        var level = map.getLevel();
        mapSize.value = level;
      });
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 2, // 클러스터 할 최소 지도 레벨
        disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
      });

      const markers = positions.value.map((position, i) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(position.lat, position.lng),
        });

        let iwContent =
          '<div class="join-page-offline-customoverlay" >' +
          '  <div>' +
          `    <span class="join-page-offline-customoverlay-title">${title.value[i]}</span>` +
          '  </div>' +
          '</div>';
        var overlay = new kakao.maps.CustomOverlay({
          content: iwContent,
          map: map,
          position: marker.getPosition(),
          setMap: null,
        });
        overlay.setMap(null);
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          overlay.setMap(map);
        });
        kakao.maps.event.addListener(marker, 'mouseout', function () {
          overlay.setMap(null);
        });
        return marker;
      });
      clusterer.addMarkers(markers);

      kakao.maps.event.addListener(
        clusterer,
        'clusterclick',
        function (cluster) {
          // 현재 지도 레벨에서 1레벨 확대한 레벨
          var level = map.getLevel() - 1;
          // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
          map.setLevel(level, { anchor: cluster.getCenter() });
        }
      );
    };

    const detailJoinToggle = () => {
      showDetailJoin.value = !showDetailJoin.value;
    };

    onMounted(async () => {
      await getOfflineData();
      initMap();
    });
    onUnmounted(() => {
      init();
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
  cursor: pointer;
  display: flex;
  width: 50vw;
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
  padding-bottom: 7rem;
  position: relative;
  border-radius: 6px;
  border-bottom: 2px solid #ddd;
  float: left;
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
    border: 0;
    margin-bottom: 7rem;
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

@media (max-width: 1000px) {
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
