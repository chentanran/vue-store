<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { reactive, computed, toRefs } from 'vue'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  name: 'reactive',
  setup() {
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => {
        return data.count * 2
      }),
      increase: () => {
        data.count++
      }
    })

    const dataRef = toRefs(data)

    return {
      ...dataRef
    }
  }
}
</script>

<style>

</style>