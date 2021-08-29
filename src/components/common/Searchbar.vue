<template>
  <div class="search-bar">
    <Dropdown :marginTop="'0.8'">
      <template v-slot:header>
        <div class="search-filter">
          <span> 필터 </span>
          <div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>
      </template>

      <template v-slot:body>
        <div class="search-filter-tap">
          <span>날짜</span>
          <span><HeaderCalendar></HeaderCalendar></span>
        </div>
        <div class="search-filter-tap">
          <span>인원</span>
          <span><NumberUpDown @countNumber="countPNumber"></NumberUpDown></span>
        </div>
        <div v-if="type === '온라인'" class="search-filter-tap">
          <span>팔로우</span>
          <span><NumberUpDown @countNumber="countFollow"></NumberUpDown></span>
        </div>
        <div v-else class="search-filter-tap">
          <span>위치</span>
          <span><FindAddress></FindAddress></span>
        </div>
      </template>
    </Dropdown>
    <div class="search-input">
      <input v-model="searchData" />
    </div>
    <div class="search-button" @click="searchInputData">
      <i class="fa fa-search fa-2x search-icon" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/common/DropDown.vue';
import { useSearch } from '@/composable/search';
import NumberUpDown from '@/components/common/NumberUpDown.vue';
import HeaderCalendar from '@/components/header/HeaderCalendar.vue';
import FindAddress from '@/components/common/FindAddress.vue';
import { ref } from 'vue';

export default {
  components: {
    Dropdown,
    NumberUpDown,
    FindAddress,
    HeaderCalendar,
  },
  props: {
    type: String,
  },
  setup() {
    const { updatePNumber, updateData, updateFollow } = useSearch();
    const pNumber = ref(0);
    const Follow = ref(0);
    const searchData = ref('');

    const countPNumber = (number) => {
      pNumber.value = number;
    };

    const countFollow = (number) => {
      Follow.value = number;
    };
    const searchInputData = () => {
      updatePNumber(pNumber.value);
      updateData(searchData.value);
      updateFollow(Follow.value);
      pNumber.value = 0;
      Follow.value = 0;
      searchData.value = 0;
    };
    return {
      pNumber,
      Follow,
      countPNumber,
      countFollow,
      searchData,
      searchInputData,
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
  height: 3rem;
  width: 500px;
  background-color: #f7f7f7;
  padding-left: 1rem;
  align-items: center;
}
.search-button {
  position: absolute;
  display: flex;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #ff385c;
}

.search-icon {
  color: white;
}
.search-joint-type {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 6rem;

  &:hover {
    background-color: $low-white;
  }
}
.search-filter {
  width: 5rem;
  display: flex;
  padding: 0 1rem;
}
.search-input {
  width: 500px;

  input {
    position: relative;
    width: 70%;
    height: 35px;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background-color: white;
  }
}
.search-filter-tap {
  display: flex;
  justify-content: space-between;
}
</style>
