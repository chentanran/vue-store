<template>
	<div style="height: 100%">
		<el-menu
      default-active="1"
      background-color="#4e72b8"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
			<el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
		</el-menu>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    

    const handleOpen = (key: string, keyPath: string) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath)
    }
  }
})
</script>

<style>

</style>