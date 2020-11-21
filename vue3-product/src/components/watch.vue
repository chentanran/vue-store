<template>
  <div>
    <div>{{ count }}</div>
    <button @click="changeCount">++</button>
  </div>
</template>

<script lang='ts'>
import { ref, watch } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const changeCount = () => {
      count.value++
    }

    document.title = '娃哈哈真好喝' + count.value

    watch(count, (oldValue, newValue) => {
      console.log(oldValue, newValue)
      document.title = '娃哈哈真好喝' + count.value
    })

    return {
      count,
      changeCount
    }
  }
}
</script>

<style>

</style>