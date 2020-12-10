<template>
	<view class="content">
		<navbar></navbar>
		<tab :list="list"></tab>
		<view v-for="item in 100" :key="item">item{{ item }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				src: '',
				list: [
					{ name: 'app' },
					{ name: 'h5' },
					{ name: 'web' },
					{ name: 'uni-app' },
					{ name: 'taro' },
					{ name: 'vue' },
					{ name: 'react' },
					{ name: 'angular' },
					{ name: '小程序' },
				]
			}
		},
		onLoad() {

		},
		methods: {
		}
	}
</script>

<style>

</style>
