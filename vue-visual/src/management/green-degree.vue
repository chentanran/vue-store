<template>
	<scrollTable :tableHeader="tableHeader" :tableData="tableData"></scrollTable>
</template>

<script>
import scrollTable from './component/scroll-table.vue'
export default {
	components: {
		scrollTable
	},
	data () {
		return {
			tableHeader: [
				{ title: '排名', value: 'name' },
				{ title: '电力设备名称', value: 'name1' },
				{ title: '能耗（顿标准煤）', value: 'name2' },
				{ title: '碳排（顿CO2）', value: 'name3' },
				{ title: '绿度水平', value: 'name4' },
				{ title: '贴标情况', value: 'name5' },
			],
			tableData: [
				{	name: 1, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 2, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 3, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 4, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 5, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 6, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 7, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 8, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 9, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 10, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 11, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 12, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
				{	name: 13, name1: '设备', name2: 100.12, name3: 100.12, name4: 23.45, name5: '优秀' },
			]
		}
	}
}
</script>

<style>

</style>