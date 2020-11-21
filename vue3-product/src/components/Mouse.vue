<template>
  <div>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
  </div>
</template>

<script lang='ts'>
import useMousePosition from '@/hooks/useMousePosition'
export default {
  setup() {
    const { x, y } = useMousePosition()

    return {
      x,
      y
    }
  }
}
</script>

<style>

</style>