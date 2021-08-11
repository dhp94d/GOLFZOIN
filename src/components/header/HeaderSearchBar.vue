<template>
  <div class="search-bar">
    <div class="search-bar-tap">
      <Dropdown :marginTop="'1.2'">
        <template v-slot:header>
          <div>위치</div>
          <input
            placeholder="어디로 치러가세요?"
            disabled="false"
            :value="
              SearchAddress === ''
                ? '주소를 입력하시오'
                : '주소가 입력되었습니다'
            "
          />
        </template>
        <template v-slot:body>
          <FindAddress></FindAddress>
        </template>
      </Dropdown>
    </div>
    <div class="search-bar-tap">
      <div>날짜</div>
      <HeaderCalendar></HeaderCalendar>
    </div>
    <div class="search-bar-tap">
      <Dropdown :marginTop="'1.2'">
        <template v-slot:header>
          <div>인원</div>
          <input
            placeholder="인원을 입력하세요"
            disabled="ture"
            :value="SearchPNumber === 0 ? '' : SearchPNumber"
          />
        </template>
        <template v-slot:body>
          <NumberUpDown></NumberUpDown>
        </template>
      </Dropdown>
    </div>
    <div class="search-button">
      <i class="fa fa-search fa-2x search-icon" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/common/DropDown.vue';
import NumberUpDown from '@/components/common/NumberUpDown.vue';
import HeaderCalendar from '@/components/header/HeaderCalendar.vue';
import FindAddress from '@/components/common/FindAddress.vue';
import { useAddress } from '@/composable/address';

export default {
  components: {
    Dropdown,
    NumberUpDown,
    HeaderCalendar,
    FindAddress,
  },
  props: {
    taps: Array,
  },
  setup() {
    const { SearchDate, SearchAddress, SearchPNumber } = useAddress();

    return {
      SearchDate,
      SearchAddress,
      SearchPNumber,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  border: 1px solid #dddddd;
  border-radius: 32px;
  color: #222222;
  position: relative;
  width: 100%;
  background-color: #f7f7f7;
  padding-left: 2rem;
  align-items: center;
}
.search-button {
  position: absolute;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #ff385c;
  z-index: 5;
}

.search-icon {
  color: white;
}

.search-bar-tap {
  cursor: pointer;
  display: block;
  border-radius: 2.3rem;
  padding: 0.4rem;
  z-index: 3;
  flex: 1 0 0%;
  div {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }
  input {
    display: block;
    border: 0px;
    width: 100%;
    background: none;
    font-size: 0.8rem;
    line-height: 18px;
    font-weight: 600;
    color: #222222;
  }
  &:hover {
    background-color: $low-white;
  }
}
</style>
