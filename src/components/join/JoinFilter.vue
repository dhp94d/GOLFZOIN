<template>
  <div class="join-filter-container">
    <div class="filter">전체</div>
    <div class="filter">
      <div>날짜</div>
    </div>
    <div>
      <Dropdown :marginTop="'1.2'" class="filter">
        <template v-slot:header>
          <input :value="SearchPNumber === 0 ? '인원' : SearchPNumber" />
        </template>
        <template v-slot:body>
          <NumberUpDown></NumberUpDown>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/common/DropDown.vue';
import NumberUpDown from '@/components/common/NumberUpDown.vue';
import { useAddress } from '@/composable/address';
export default {
  components: {
    Dropdown,
    NumberUpDown,
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
.join-filter-container {
  display: flex;
}
.join-filter-container .filter {
  font-size: 0.9rem;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 0.3rem 1rem;
  margin-right: 0.8rem;
  &:active {
    box-shadow: 1px 1px 0 black;
    position: relative;
    top: 2px;
  }
  input {
    border: 0;
    width: 2rem;
  }
}
</style>
