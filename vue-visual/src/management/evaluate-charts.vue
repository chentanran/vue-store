<template>
	<div id="main" style="height:100%;width:100%;"></div>
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

const data = [
  { value: 23, name: 'AAA-优秀', itemStyle: colorFunc('#f6d365', '#fda085') },
  { value: 34, name: 'AA-良好', itemStyle: colorFunc('#f093fb', '#f5576c') },
  { value: 23, name: 'A-中等', itemStyle: colorFunc('#89f7fe', '#66a6ff') }
]

export default {
mounted () {
    this.init()
  },
  methods: {
    findValue (name) {
      return data.find(item => item.name === name).value
    },

    init () {
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'item',
          color: '#fff'
        },
        legend: {
          orient: 'vertical',
          right: '15%',
          top: '30%',
          textStyle: {
            color: '#fff'
          },
          // 使用回调函数
          formatter: (name) => {
              return name;
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['35%', '50%'],
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: '#fff'
              },
            },
            labelLine: {
              normal: {
                 show: false
              }
            },
            label: {
              normal: {
                color: '#fff',
                formatter: '{b}\n {c}个\n {d}%'
              }
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