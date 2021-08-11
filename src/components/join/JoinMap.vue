<template>
  <div>
    <div id="map" style="width: 500px; height: 400px"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    const initMap = () => {
      const mapContainer = document.getElementById('#map'),
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      const map = new kakao.maps.Map(mapContainer, mapOption);
    };
    onMounted(() => {
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
  },
};
</script>

<style></style>
