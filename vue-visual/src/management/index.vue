<template>
  <div class="box">
    <div class="title">电力设备供应链绿度管理平台</div>
    <div class="center">
      <!-- // -->
      <div class="chart-box chart-box-100">
        <div class="chart-title">贴标评价</div>
        <div class="chart evaluate">
					<div>
						<evaluateInfo></evaluateInfo>
					</div>
					<div>
						<evaluateCharts></evaluateCharts>
					</div>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">重点设备贴标分析</div>
        <div class="chart">
					<decals></decals>
        </div>
      </div>
      <!--  -->
      <div class="chart-box">
        <div class="chart-title">重点设备绿度排名</div>
        <div class="chart">
          <greenDegree></greenDegree>
        </div>
      </div>
      <!--  -->
      <div class="chart-box chart-box-33">
        <div class="chart-title">AAA-优秀电力设备分析</div>
        <div class="chart">
          <goodPower></goodPower>
        </div>
      </div>
      <!--  -->
      <div class="chart-box chart-box-33">
        <div class="chart-title">AA-良好电力设备分析</div>
        <div class="chart">
          <finePower></finePower>
        </div>
      </div>
      <!--  -->
      <div class="chart-box chart-box-33">
        <div class="chart-title">A-中等电力设备分析</div>
        <div class="chart">
          <mediumPower></mediumPower>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import evaluateInfo from './evaluate-info.vue'
import evaluateCharts from './evaluate-charts.vue'
import decals from './decals.vue'
import greenDegree from './green-degree.vue'
import goodPower from './good-power.vue'
import finePower from './fine-power.vue'
import mediumPower from './medium-power.vue'
export default {
  name: 'HelloWorld',
  components: {
		evaluateInfo,
		evaluateCharts,
		decals,
    greenDegree,
    goodPower,
    finePower,
    mediumPower
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
  font-size: 3vh;
  padding: 0.8vh 0;
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

.chart-box-100 {
	width: 98%;
}

.chart-box-33 {
	width: 31%;
}

.chart-title {
  font-size: 1rem;
  margin: 0.5rem;
}
.chart {
  height: calc(100% - 3rem);
  width: 100%;
}
.evaluate {
	display: flex;
}
.evaluate > div {
	width: 50%;
}
</style>
