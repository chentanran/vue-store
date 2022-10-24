<template>
	<div id="decals" style="height:100%;width:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
mounted () {
    this.init()
  },
  methods: {
    init () {
      var myChart = echarts.init(document.getElementById('decals'));

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
					data: ['AAA-优秀', 'AA-良好', 'A-中等'],
					textStyle: {
						color: '#ffffff'
					}
				},
				xAxis: [
					{
						type: 'value',
						color: '#fff',
						nameTextStyle: {
							color: '#fff'
						},
						splitLine: {
							show: false
						},
						min: 0,
						axisLabel: {
							color: '#fff'
						},
						textStyle: {
							color: '#fff'
						}
					},
				],
				yAxis: [
					{
						type: 'category',
						data: ['家具家电', '粮油副食', '美容洗护', '母婴用品', '进口食品', '食品饮料', '家庭清洁'],
						splitLine: {
							show: false
						},
						axisLabel: {
							textStyle: {
								color: '#ffffff'
							}
						}
					},
				],
				series: [
					{
						name: 'AAA-优秀',
						type: 'bar',
						barWidth: '60%',
						stack: 'total',
						data: [
							2.0, 4.9, 7.0, 23.2, 25.6, 10, 15
						],
						label: {
							show: true,
							position: 'inside',
							color: '#fff'
						},
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: '#d4fc79'
								},
								{
									offset: 1,
									color: '#96e6a1'
								}
							])
						}
					},
					{
						name: 'AA-良好',
						type: 'bar',
						barWidth: '60%',
						stack: 'total',
						data: [
							2.6, 5.9, 9.0, 26.4, 28.7, 15, 20
						],
						label: {
							show: true,
							position: 'inside',
							color: '#fff'
						},
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: '#5ee7df'
								},
								{
									offset: 1,
									color: '#b490ca'
								}
							])
						}
					},
					{
						name: 'A-中等',
						type: 'bar',
						barWidth: '60%',
						stack: 'total',
						data: [
							15, 5.9, 9.0, 26.4, 28.7, 5, 10
						],
						label: {
							show: true,
							position: 'inside',
							color: '#fff'
						},
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: '#fa709a'
								},
								{
									offset: 1,
									color: '#fee140'
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