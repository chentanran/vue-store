<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
export default {
  name: 'ref',
  setup() {
    const count = ref(0)

    const double = computed(() => {
      return count.value * 2
    })

    const increase = () => {
      count.value++
    }

    return {
      count,
      increase,
      double
    }
  }
}
</script>

<style>

</style>