<template>
  <nav
    class="nav-path"
    style="--bs-breadcrumb-divider: '>'"
    aria-label="breadcrumb"
  >
    <div class="nav-title">{{ props }}</div>
    <ol class="breadcrumb">
      <li
        v-for="(item, index) in props"
        :key="`nav-path${index}`"
        class="breadcrumb-item"
      >
        <router-link to="/">{{ item }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    paths: Array,
  },
  setup(props) {
    console.log(props.value);
    return {};
  },
});
</script>

<style>
.nav-title {
  font-size: 1.2rem;
  font-weight: bold;
}
.nav-path {
  display: flex;
  justify-content: space-between;
}
</style>
