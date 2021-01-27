<template>
	<view class="home">
		<navbar isSearch v-model="value" @input="change"></navbar>
		<view class="label-box" v-if="is_history">
			<view class="label-header">
				<text class="label-title">搜索历史</text>
				<text class="label-clear" @click="clear">清空</text>
			</view>
			<view class="label-content" v-if="historyList.length > 0">
				<view class="label-content__item" v-for="(item, index) in historyList" :key="index">
					{{ item }}
				</view>
			</view>
			<view class="no-data" v-else>
				没有搜索历史
			</view>
		</view>
		<list-scroll v-else class="list-scroll">
			<uni-load-more v-if="loading" status="loading" iconType="snow" ></uni-load-more>
			<view v-if="list.length > 0">
				<list-card
					:item="item"
					v-for="item in list"
					:key="item._id"
					@click="setHistory"
				></list-card>
			</view>
			<view class="no-data" v-if="list.length === 0 && !loading">
				没有搜索到相关数据
			</view>
		</list-scroll>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				is_history: true,
				list: [],
				value: '',
				loading: false
			}
		},
		computed: {
			...mapState(['historyList'])
		},
		methods: {
			setHistory() {
				console.log(this.value, 'value')
				this.$store.dispatch('set_history', this.value)
			},
			
			clear() {
				this.$store.dispatch('clear_history')
			},
			
			change(val) {
				// this.value = val
				if (val === '') {
					clearTimeout(this.timers)
					this.mark = false
					this.list = []
					this.is_history = true
					return
				}
				
				if (!this.mark) {
					this.mark = true
					if (this.timers) {
						clearTimeout(this.timers)
						this.mark = false
					}
					this.timers = setTimeout(() => {
						this.mark = false
						this.getList(val)
					}, 1000)
				}
			},
			
			getList(value) {
				this.loading = true
				this.is_history = false
				this.$api.get_search({
					value
				}).then(res => {
					this.list = res.data
					this.loading = false
				}).catch(() => {
					this.is_history = true
					this.loading = false
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		background-color: #f5f5f5;
	}
	
	// .list-scroll {
	// 	height: 100%;
	// }

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border-bottom: 1px #f5f5f5 solid;

				.label-title {
					color: $tz-base-color;
				}

				.label-clear {
					color: #30b33a;
					font-weight: bold;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;

				.label-content__item {
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px #666 solid;
					font-size: 14px;
					color: #666;
				}
			}
		}
	}

	.no-data {
		height: 200px;
		line-height: 200px;
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
</style>
