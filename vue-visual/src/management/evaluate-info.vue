<template>
	<div class="evaluate-info">
		<div v-for="item in data" :key="item.label" class="evaluate-box">
			<span class="dot" :style="{ background: item.color }"></span>
			<span>{{ item.label }}</span>
			<span class="color evaluate-value">{{ item.value }}</span>
			<span> 个</span>
			<span class="evaluate-zanbi">占比</span>
			<span class="color evaluate-ratio">{{ item.ratio }}</span>
			<span>%</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			data: [
				{
					label: 'AAA-优秀',
					value: '23',
					ratio: '23.4',
					color: 'rgb(101, 162, 0)'
				},
				{
					label: 'AA-良好',
					value: '34',
					ratio: '50.7',
					color: 'rgb(145, 240, 0)'
				},
				{
					label: 'A-中等',
					value: '23',
					ratio: '29.45',
					color: 'rgb(254, 250, 121)'
				}
			]
		}
	}
}
</script>

<style scoped>
.evaluate-info {
	width: 100%;
}
.evaluate-box {
	position: relative;
	width: 50%;
	text-align: center;
	margin: auto;
	padding: 2vh;
	margin-bottom: 1vh;
	border: 1px solid rgb(28, 68, 75);
}
.color {
	color: #f5576c;
}
.evaluate-value {
	margin-left: 1.5vw;
}
.evaluate-zanbi {
	margin-left: 3vw;
}
.evaluate-ratio {
	margin: 0 1vw;
}
.dot {
	position: absolute;
	left: 10%;
	top: 50%;
	transform: translateY(-50%);
	background: rgb(145, 240, 0);
	padding: 0.8vw;
	display: inline-block;
	border-radius: 50%;
	margin-right: 0.5vw;
}
</style>