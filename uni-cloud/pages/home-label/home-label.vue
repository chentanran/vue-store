<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-content label-title">我的标签</view>
				<view class="label-edit" @click="editLabel">{{is_edit ? '完成' : '编辑'}}</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view class="label-content" v-if="!loading">
				<view class="label-content__item" v-for="(item, index) in labelList" :key="item._id">
					{{ item.name }}
					<uni-icons 
						v-if="is_edit" 
						class="icons-close" 
						type="clear" 
						size="20" 
						color="red"
						@click="del(item, index)"
					></uni-icons>
				</view>
				<view class="no-data" v-if="labelList.length === 0 && !loading">
					当前没有数据
				</view>
			</view>
		</view>
		
		<view class="label-box">
			<view class="label-header">
				<view class="label-content label-title">标签推荐</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view class="label-content" v-if="!loading">
				<view 
					class="label-content__item" 
					v-for="(item, index) in list" 
					:key="item._id"
					@click="add(item, index)"
				>
					{{ item.name }}
				</view>
				
				<view class="no-data" v-if="list.length === 0 && !loading">
					当前没有数据
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit: false,
				labelList: [],
				list: [],
				loading: true
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			editLabel() {
				if (this.is_edit) {
					this.setUpdateLabel(this.labelList)
				} 
				
				this.is_edit = !this.is_edit
			},
			
			add(item, index) {
				if (!this.is_edit) {
					return
				}
				this.labelList.push(item)
				this.list.splice(index, 1)
			},
			
			del(item, index) {
				if (!this.is_edit) {
					return
				}
				this.list.push(item)
				this.labelList.splice(index, 1)
			},
			
			setUpdateLabel(label) {
				const labelId = label.map(item => {
					return item._id
				})
				
				uni.showLoading()
				this.$api.update_label({
					label: labelId
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: '更新成功'
					})
					uni.$emit('changeLabel')
					console.log(res, 'res')
				})
			},
			
			getLabel() {
				this.$api.get_label({
					type: 'all'
				}).then(res => {
					this.loading = false
					const { data } = res
					this.labelList = data.filter(item => item.current)
					this.list = data.filter(item => !item.current)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.label {
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				padding: 10px 15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px #f5f5f5 solid;
				.label-edit {
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
					position: relative;
					padding: 2px 5px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px #666 solid;
					font-size: 14px;
					color: #666;

					.icons-close {
						position: absolute;
						right: -8px;
						top: -8px;
						background-color: #fff;
						border-radius: 50%;
					}
				}
			}
			
			.label-title {
					padding-bottom: 0;
			}
		}
	}

	.no-data {
		width: 100%;
		text-align: center;
		padding: 50px 0;
		color: #999;
		font-size: 14px;
	}
</style>
