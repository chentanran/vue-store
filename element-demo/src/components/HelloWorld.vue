<template>
  <div class="hello">
    <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <template v-for="(item, index) in formData.oneCycle">
        <el-form-item :key="index" label="姓名" :prop="'oneCycle.' + index + '.name'" :rules="{required: true, message: '请输入姓名',trigger: 'blur'}">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
      </template>
 </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      formData: {
        oneCycle: [
          {
            name: ''
          },
          {
            name: ''
          }
        ]
      },
      rules: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
