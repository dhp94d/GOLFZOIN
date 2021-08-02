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
      const container = document.querySelector('#map');
      const options = {
        center: new kakao.maps.LatLng(35.19656853772262, 129.0807270648317),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(
        35.19656853772262,
        129.0807270648317
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
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
