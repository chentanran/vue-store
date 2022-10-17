<template>
	<div id="heapupBar" style="height:100%;width:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'

const colorFunc = (color1, color2) => {
	return {
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
			{
				offset: 0,
				color: color1
			},
			{
				offset: 1,
				color: color2
			}
		])
	}
}

export default {
mounted () {
    this.init()
  },
  methods: {
    init () {
      var myChart = echarts.init(document.getElementById('heapupBar'));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#fff'
						}
					}
				},
				grid: {
					bottom: 20
				},
				legend: {
					data: ['运输', '仓储', '配送', '管理', '总量'],
					textStyle: {
						color: '#ffffff'
					}
				},
				xAxis: [
					{
						type: 'category',
						data: ['一月', '二月', '三月', '四月', '五月'],
						axisPointer: {
							type: 'shadow'
						},
						axisLabel: {
							textStyle: {
								color: '#ffffff'
							}
						}
					},
				],
				yAxis: [
					{
						type: 'value',
						name: '单位: 吨 CO2',
						color: '#fff',
						nameTextStyle: {
							color: '#fff'
						},
						min: 0,
						max: function (value) {
							return Math.ceil(value.max / 2);
						},
						axisLabel: {
							color: '#fff'
						},
						textStyle: {
							color: '#fff'
						},
						splitLine: {
							show: false
						},
					},
				],
				series: [
					{
						name: '运输',
						stack: 'total',
						type: 'bar',
						barWidth: '20%',
						data: [
							2.0, 4.9, 7.0, 23.2, 25.6
						],
						itemStyle: colorFunc('#00cdac', '#8ddad5')
					},
					{
						name: '仓储',
						stack: 'total',
						type: 'bar',
						data: [
							2.6, 5.9, 9.0, 26.4, 28.7
						],
						itemStyle: colorFunc('#4facfe', '#00f2fe')
					},
					{
						name: '配送',
						stack: 'total',
						type: 'bar',
						data: [2.0, 2.2, 3.3, 4.5, 6.3],
						itemStyle: colorFunc('#fa709a', '#fee140')
					},
					{
						name: '管理',
						stack: 'total',
						type: 'bar',
						data: [10.2, 20.3, 23.4, 23.0, 16.5],
						itemStyle: colorFunc('#bdc2e8', '#e6dee9')
					},
					{
						name: '总量',
						type: 'line',
						tooltip: {
							valueFormatter: function (value) {
								return value;
							}
						},
						data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: '#00c6fb'
								},
								{
									offset: 1,
									color: '#005bea'
								}
							])
						}
					}
				]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
			window.addEventListener('resize', () => {
				myChart.resize()
			})
    }
  }
}
</script>

<style>

</style>