<template>
	<div id="jobanalysis" style="height:100%;width:100%;"></div>
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
      var myChart = echarts.init(document.getElementById('jobanalysis'));

      // 指定图表的配置项和数据
      var option = {
				grid: {
					bottom: 10,
					top: 10
				},
				polar: {
					radius: [30, '90%']
				},
				radiusAxis: {
					max: 4,
					axisLine: {
						lineStyle: {
							// color: '#fff'
						}
					}
				},
				angleAxis: {
					type: 'category',
					data: ['配送作业', '管理作业', '运输作业', '仓储作业'],
					startAngle: 90,
					axisLabel: {
						color: '#fff'
					},
					lineStyle: {
						// color: "#fff"
					}
				},
				tooltip: {},
				series: {
					type: 'bar',
					data: [
						{
							value : 2,
							label: {
								color: '#fff'
							},
							itemStyle: colorFunc('#fa709a', '#fee140')
						},
						{
							value : 1.2,
							label: {
								color: '#fff'
							},
							itemStyle: colorFunc('#bdc2e8', '#e6dee9')
						}, 
						{
							value : 2.4,
							label: {
								color: '#fff'
							},
							itemStyle: colorFunc('#00cdac', '#8ddad5')
						}, 
						{
							value : 3.6,
							label: {
								color: '#fff'
							},
							itemStyle: colorFunc('#4facfe', '#00f2fe')
						}],
					coordinateSystem: 'polar',
					label: {
						show: true,
						position: 'middle',
						formatter: (age) => {
							console.log(age, 'age')

							// return `${age.value} ${Math.floor((age.value / 8.2) * 100) / 100}`
							return `${age.value}`
						}
					}
				},
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