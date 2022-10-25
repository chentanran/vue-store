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
				{ title: '序号', value: 'name' },
				{ title: '批次', value: 'name1' },
				{ title: '分类', value: 'name2' },
				{ title: '优秀设备数量', value: 'name3' },
				{ title: '设备总数', value: 'name4' },
				{ title: '分类内占比', value: 'name5' },
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