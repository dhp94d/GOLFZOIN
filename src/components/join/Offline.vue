<template>
  <div class="join-page-offline-container">
    <div class="join-page-offline-map">
      <div class="join-page-offline-header">
        <div>{{ offlineJoinData?.length }}개 이상의 조인</div>
        <div class="join-page-offline-title">오프라인 조인</div>
        <JoinFilter class="join-page-offline-filter"></JoinFilter>
      </div>
      <div class="join-page-offline-container">
        <div
          v-for="(offlinejoin, index) in offlineJoinData"
          :key="`offlinejoin${index}`"
        >
          <div @click="offlineJoinClick(offlinejoin)">
            <JoinItem
              :title="offlinejoin.data.title"
              :time="offlinejoin.data.time"
              :date="offlinejoin.data.date"
              :maximum="offlinejoin.data.maximum"
              :thumbnail="offlinejoin.data.thumbnail"
              :detailText="offlinejoin.data.detailText"
              :participants="offlinejoin.data.participants"
              :id="offlinejoin.id"
              :simple="false"
            ></JoinItem>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div id="map"></div>
    </div>
  </div>
</template>
<script>
import JoinFilter from '@/components/join/JoinFilter.vue';
import JoinItem from '@/components/join/JoinItem.vue';
import { ref, onMounted } from 'vue';
import { getJoinAll } from '@/api/join';
import { useJoin } from '@/composable/join';

export default {
  components: {
    JoinFilter,
    JoinItem,
  },
  setup() {
    const { updateTarget } = useJoin();
    updateTarget(3);
    const offlineJoinData = ref();
    const mapTypeControl = new kakao.maps.MapTypeControl();
    const zoomControl = new kakao.maps.ZoomControl();
    const bounds = new kakao.maps.LatLngBounds();
    const positions = ref([]);
    const title = ref([]);

    const getOfflineData = async () => {
      const res = await getJoinAll('offline');
      offlineJoinData.value = res.data;
      offlineJoinData.value.map((v, i) => {
        title.value.push(v.data.title);

        positions.value.push(
          new kakao.maps.LatLng(
            v.data.address.latitude,
            v.data.address.longitude
          )
        );
      });
    };

    const offlineJoinClick = (offlinejoin) => {
      updateTarget(offlinejoin.id);
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
          kakao.maps.event.addListener(customOverlay, 'click', function () {
            console.log('zz');
          });
        })(customOverlay);

        bounds.extend(positions.value[i]);
      }
    };

    onMounted(async () => {
      await getOfflineData();
      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement('script');
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=15ac0683efa77658fcfebb90ca8d1bc4';
        document.head.appendChild(script);
      }
    });
    return {
      offlineJoinData,
      offlineJoinClick,
    };
  },
};
</script>

<style lang="scss">
.join-page-offline-map {
  overflow: auto;
  flex: 1;
}
.join-page-offlinee-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
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
#map {
  position: sticky;
  top: 8rem;
  width: 46vw;
  height: 86vh;
  flex: 1;
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
.join-page-offline-header {
  padding-left: 1rem;
}
</style>
