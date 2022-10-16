<template>
	<div id="heapenergybar" style="height:100%;width:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
mounted () {
    this.init()
  },
  methods: {
    init () {
      var myChart = echarts.init(document.getElementById('heapenergybar'));

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
					data: ['能耗', '碳排'],
					textStyle: {
						color: '#ffffff'
					}
				},
				xAxis: [
					{
						type: 'category',
						data: ['2016', '2017', '2018', '2019', '2020	'],
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
				yAxis: [
					{
						type: 'value',
						name: '单位: 吨标准煤/吨CO2',
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
				series: [
					{
						name: '能耗',
						type: 'bar',
						barWidth: '20%',
						data: [
							2.0, 4.9, 7.0, 23.2, 25.6
						],
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: '#48c6ef'
								},
								{
									offset: 1,
									color: '#6f86d6'
								}
							])
						}
					},
					{
						name: '碳排',
						type: 'line',
						tooltip: {
							valueFormatter: function (value) {
								return value;
							}
						},
						data: [20.3, 23.4, 23.0, 16.5, 15.2],
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: '#48c6ef'
								},
								{
									offset: 1,
									color: '#6f86d6'
								}
							])
						}
					}
				]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
			window.onresize = myChart.resize
    }
  }
}
</script>

<style>

</style>