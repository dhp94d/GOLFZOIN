<template>
  <div class="address-buttons">
    <input type="button" @click="getLocation" value="내 위치" /><br />
    <input type="button" @click="findAddress" value="검색 하기" /><br />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const latitude = ref('');
    const longitude = ref('');

    const addressMutation = () => {
      store.commit('search/SET_SEARCH_ADDRESS', {
        latitude: latitude.value,
        longitude: longitude.value,
      });
    };
    const findAddress = () => {
      new daum.Postcode({
        oncomplete: function (data) {
          console.log(data);
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(data.roadAddress, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              latitude.value = result[0].x;
              longitude.value = result[0].y;
            }
            addressMutation();
          });
        },
      }).open();
    };
    const getLocation = () => {
      if (navigator.geolocation) {
        // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(
          function (position) {
            latitude.value = position.coords.latitude;
            longitude.value = position.coords.longitude;
            addressMutation();
          },
          function (error) {
            console.error(error);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          }
        );
      } else {
        alert('GPS를 지원하지 않습니다');
      }
    };
    return {
      findAddress,
      getLocation,
      latitude,
      longitude,
    };
  },
};
</script>

<style>
.address-buttons {
  display: flex;
}
.address-buttons input {
  font-weight: 600;
  border: 0;
  background-color: white;
  color: gray;
}
.address-buttons input:hover {
  color: black;
}
</style>
