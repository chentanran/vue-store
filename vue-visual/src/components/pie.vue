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
  { value: 1048, name: '重点行业1', itemStyle: colorFunc('#f6d365', '#fda085') },
  { value: 735, name: '重点行业2', itemStyle: colorFunc('#f093fb', '#f5576c') },
  { value: 580, name: '重点行业3', itemStyle: colorFunc('#89f7fe', '#66a6ff') },
  { value: 484, name: '重点行业4', itemStyle: colorFunc('#00c6fb', '#005bea') },
  { value: 300, name: '重点行业5', itemStyle: colorFunc('#a1c4fd', '#c2e9fb') },
  { value: 300, name: '重点行业6', itemStyle: colorFunc('#d4fc79', '#96e6a1') },
  { value: 300, name: '重点行业7', itemStyle: colorFunc('#84fab0', '#8fd3f4') },
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
          right: '5%',
          top: '20%',
          textStyle: {
            color: '#fff'
          },
          // 使用回调函数
          formatter: (name) => {
              return `${name} ${this.findValue(name)}家`;
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '50%',
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
                formatter: '{b} {d}%'
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