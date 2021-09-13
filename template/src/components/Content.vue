<template>
	<div style="display: flex; flex-wrap: wrap;">
		<div v-for="item in 10" :key="item" style="margin-bottom: 10px; margin-right:10px;">
			<el-card :body-style="{ padding: '0px'}" >
				<img
					src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					class="image"
				/>
				<div style="padding: 14px;text-align:center;">
					<span>好吃的汉堡</span>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>