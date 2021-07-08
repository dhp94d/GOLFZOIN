<template>
	<div class="app">
		<AppHeader></AppHeader>
		<div class="app-contents">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/Header.vue';

export default defineComponent({
	name: 'App',
	components: {
		AppHeader,
	},
});
</script>

<style>
#app {
	font-family: '돋움', dotum, Gulim, Helvetica, Sans-serif;
	font-size: 12px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding: 0 6rem;
}
</style>
