<template>
		<view class="navbar">
			<view class="nav-fiex">
				<view :style="{height: statusBarHeight + 'px'}"></view>
				<view class="navbar-content" :style="{height: navBarHeight + 'px', width: windowWidth + 'px'}">
					<view class="navbar-search">
						<view class="navbar-search_icon">
							<uni-icons type="search" size="22" color="#999"></uni-icons>
						</view> 
						<view class="navbar-search_text">uni-app</view>
					</view>
				</view>
			</view>
			<view :style="{height: (statusBarHeight + navBarHeight) + 'px'}"></view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375
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
			}
		}
	}
</style>
