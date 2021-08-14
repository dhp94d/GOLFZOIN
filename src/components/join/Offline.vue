<template>
  <div class="join-page-offline-container">
    <div class="join-page-offline-map">
      <div class="join-page-offline-body">
        <div>{{ offlineJoinData?.length }}개 이상의 조인</div>
        <div class="join-page-offline-title">오프라인 조인</div>
        <JoinFilter class="join-page-offline-filter"></JoinFilter>
      </div>
      <br />
      <div class="join-page-offline-list">
        <div
          v-for="(offlinejoin, index) in offlineJoinData"
          :key="`offlinejoin${index}`"
        >
          <hr />
          <div class="offline-box" @click="offlineJoinClick(offlinejoin)">
            <img :src="offlinejoin.data.thumbnail" />
            <div class="offline-box-detail">
              <div class="offline-box-gray-color">
                {{ offlinejoin.data.date }}&nbsp;
                {{ offlinejoin.data.time }}
              </div>
              <h5>
                {{
                  offlinejoin.data.title.length > 22
                    ? offlinejoin.data.title.slice(0, 22) + '...'
                    : offlinejoin.data.title
                }}
              </h5>
              <div>
                <div>{{ offlinejoin.data.address.addressName }}</div>
              </div>
              <div class="offline-box-body">
                {{
                  offlinejoin.data.detailText.length > 40
                    ? offlinejoin.data.detailText.slice(0, 40) + '...'
                    : offlinejoin.data.detailText
                }}
              </div>
              <div>
                남은인원&nbsp;:&nbsp;{{ offlinejoin.data.participants }}/{{
                  offlinejoin.data.maximum
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>
<script>
import JoinFilter from '@/components/join/JoinFilter.vue';
import { ref, onMounted } from 'vue';
import { getJoinAll } from '@/api/join';
import { useJoin } from '@/composable/join';
import { useRouter } from 'vue-router';

export default {
  components: {
    JoinFilter,
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
    const router = useRouter();
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
      router.push({
        name: 'OfflineDetailJoin',
      });
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
