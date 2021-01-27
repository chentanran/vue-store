<template>
		<view class="navbar">
			<view class="nav-fiex">
				<view :style="{height: statusBarHeight + 'px'}"></view>
				<view
				  class="navbar-content"
					:class="{search:isSearch}"
					:style="{height: navBarHeight + 'px', width: windowWidth + 'px'}"
					@click.stop="open"
				>
					<view v-if="isSearch" class="navbar-content__search-icons" @click="back">
						<uni-icons type="back" size="22" color="#fff"></uni-icons>
					</view>
					<view v-if="!isSearch" class="navbar-search">
						<!-- 非搜索页显示 -->
						<view class="navbar-search_icon">
							<uni-icons type="search" size="16" color="#999"></uni-icons>
						</view>
						<view class="navbar-search_text">uni-app、vue</view>
					</view>
					<view v-else class="navbar-search">
						<!-- 搜索页显示  -->
						<input
							class="navbar-search_text"
							type="text" 
							placeholder="请输入您要搜索的内容"
							v-model="val"
							@input="changeInput"
						/>
					</view>
				</view>
			</view>
			<view :style="{height: (statusBarHeight + navBarHeight) + 'px'}"></view>
		</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			}
		},
		watch: {
			value(newVal) {
				this.val = newVal
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375,
				val: ''
			}
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			// (底部高度 - 状态栏高度) + (顶部高度 - 状态栏高度) = 导航栏高度
			let navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)

			this.navBarHeight = navBarHeight
			this.windowWidth = menuButtonInfo.left
			// #endif
		},
		methods: {
			back(){
				// uni.navigateBack()
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			},
			open() {
				if (this.isSearch) return
				uni.navigateTo({
					url: "/pages/home-search/home-search"
				})
			},
			
			changeInput(e) {
				const { value } = e.detail
				this.$emit('input', value)
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
		.nav-fiex {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			background-color: $tz-base-color;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				padding-right: 15px;
				// height: 45px;
				box-sizing: border-box;
				.navbar-search {
					display: flex;
					align-items: center;
					height: 30px;
					width: 100%; 
					border-radius: 30px;
					background-color: #fff;
					.navbar-search_icon {
						// width: 10px;
						// height: 10px;
						// border: 1px red solid;
						margin-right: 10px;
					}
					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
				
				&.search {
					padding-left: 0;

					.navbar-content__search-icons {
						margin-left: 10px;
						margin-right: 10px;
					}

					.navbar-search {
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>
