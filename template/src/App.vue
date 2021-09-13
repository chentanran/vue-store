<template>
  <el-container>
    <el-aside width="200px">
      <MenuComponent />
    </el-aside>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuComponent from '@/components/Menus.vue'

export default defineComponent({
  name: 'App',
  components: {
    MenuComponent
  },
});
</script>


<style lang="scss">
html,body, #app, .el-container, .el-menu, .detail {
  height: 100%;
}
.el-header {
  background-color: #4e72b8;
}
.el-main {
  padding: 0!important;
}
</style>
