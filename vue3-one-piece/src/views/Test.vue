<template>
  <view class="content">
    <view>
      <!-- <u-button type="error">危险按钮</u-button> -->
      <text class="title">{{ JSON.stringify(test.move) }}</text>
      <button
        type="error"
        :disabled="model['test/setUser']"
        @click="getUserData"
        >获取个人信息</button>
    </view>
  </view>
</template>

<script>
import { createModel } from '../utils/GenerateModel'
export default createModel(
  {
    name: 'test',
    methods: {
      getUserData () {
        this.dispatch('test/setUser', {
          user: '1111'
        }, true, this).then((res) => {
          console.log(res)
        })
      }
    }
  },
  ['test', 'index']
)
</script>
