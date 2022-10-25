<template>
	<div class="tabbox">
		<div class="libox">
			<p v-for="item in tableHeader" :key="item.title">{{ item.title }}</p>
		</div>
		<ul>
			<vue-seamless-scroll :data="tableData" class="seamless-warp"
				:class-option="defaultOption">

				<li v-for="(item,index) in tableData" :key="index">
					<p v-for="tableHeaderitem in tableHeader" :key="tableHeaderitem.title">
						{{ item[tableHeaderitem.value] }}
					</p>
				</li>

			</vue-seamless-scroll>
		</ul>
	</div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
	components: {
		vueSeamlessScroll
	},
	props: {
		tableHeader: {
			type: Array,
			default: () => []
		},
		tableData: {
			type: Array,
			default: () => []
		}
	},
	data () {
		return {
			
		}
	},
	computed: {
    // 报警文本滚动
    defaultOption () {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)

      }
    }
  },
}
</script>

<style scoped>
ul, li {
	margin: 0;
	padding: 0;
	padding-inline-start: 0;
}
li {
	list-style: none;
}
.tabbox {
	width: 100%;
	height: 100%;
	margin-top: 1.5vh;
	text-align:center;
}
.libox {
	width: 100%;
	height: 40px;
	font-size: 1.1vh;
	display: flex;
	justify-content: space-between;
}
.libox p {
	width: 16.6%;
  color: #fff;
}
div {
	z-index: 2;
}
ul {
	width: 100%;
	height: 84%;
	overflow-y: auto;
}
li {
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	line-height: 40px;
}
li:nth-child(2n) {
	background: RGBA(52, 75, 87, 0.6);
}
li:hover {
	background: rgba(79, 119, 163, 0.4);
}
li p {
	width: 16.6%;
	color: #fff;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
	font-size: 0.4vh;
	font-family: SourceHanSansCN;
	font-weight: 300;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
	width: 0.7vh;
	height: 0.7vh;
	background: RGBA(56, 74, 97, 0.2);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
	border-radius: 1vh;
	background: RGBA(56, 74, 97, 0.6);
	-webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
</style>