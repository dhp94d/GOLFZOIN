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
    const addressName = ref('');
    const tempName = ref('');
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        tempName.value = result[0].address.address_name;
      }
    };

    const getAddressName = async (lng, lat) => {
      let coord = new kakao.maps.LatLng(lng, lat);
      await geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };

    const addressMutation = () => {
      store.commit('search/SET_SEARCH_ADDRESS', {
        latitude: latitude.value,
        longitude: longitude.value,
        addressName: addressName.value,
      });
    };
    const findAddress = () => {
      new daum.Postcode({
        oncomplete: function (data) {
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(data.roadAddress, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              latitude.value = result[0].y;
              longitude.value = result[0].x;
              getAddressName(result[0].y, result[0].x);
              addressName.value = tempName.value;
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
            getAddressName(position.coords.longitude, position.coords.latitude);
            addressName.value = tempName.value;
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
      addressName,
      tempName,
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
