<template>
  <div class="box">
    <div class="title">电力设备供应链绿度管理平台</div>
    <div class="center">
      <!-- // -->
      <div class="chart-box">
        <div class="chart-title">设备信息（设备分类情况）</div>
        <div class="chart">
          <pie></pie>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">碳排作业分析</div>
        <div class="chart">
          <jobanalysis></jobanalysis>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">碳排作业趋势分析（同比环比情况）</div>
        <div class="chart">
          <heapupBar></heapupBar>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">碳排作业趋势分析（同比环比情况）</div>
        <div class="chart">
          <heapBar></heapBar>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">供应链能源趋势</div>
        <div class="chart">
          <heapenergybar></heapenergybar>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">供应链碳排作业趋势</div>
        <div class="chart">
          <supplychain></supplychain>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pie from './pie.vue'
import heapupBar from './heapup-bar.vue'
import heapBar from './heap-bar.vue'
import heapenergybar from './heap-energy-bar.vue'
import supplychain from './supply-chain.vue'
import jobanalysis from './job-analysis.vue'
export default {
  name: 'HelloWorld',
  components: {
    pie,
    heapupBar,
    heapBar,
    heapenergybar,
    supplychain,
    jobanalysis
  }
}
</script>

<style scoped>
.box {
  height: 100vh;
  background: rgb(0, 38, 47);
}
.title {
  text-align: center;
  font-size: 30px;
  padding: 10px 0;
  color: #fff;
}
.center {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #fff;
}
.chart-box {
  border: 1px dashed rgb(120,150,161);
  height: 30vh;
  width: 48%;
  margin-bottom: 1vh;
}
.chart-title {
  font-size: 1rem;
  margin: 0.5rem;
}
.chart {
  height: calc(100% - 3rem);
  width: 100%;
}
</style>
