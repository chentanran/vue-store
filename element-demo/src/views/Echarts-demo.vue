<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" style="height:40vh;"></el-col>
      <el-col :span="12" style="height:40vh;"></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" style="height:40vh;"></el-col>
      <el-col :span="12" style="height:40vh;">
        <div style="position: relative;height:100%;">
          <div style="position: absolute;left: 10px;top: 6%;z-index:1000000000">哇哈哈真好喝</div>
          <div id="echart1" class="echart1" style="width:100%;height:100%;"></div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {}
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const mychart = echarts.init(document.getElementById('echart1'))
      mychart.setOption({
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          name: '123',
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
}
</script>

<style>

</style>
