<template>
  <div>
    <pre>
      这是详情页， 啦啦啦
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'columnDetail',
  setup () {
    const route = useRoute()

    return {
      route
    }
  }
})
</script>

<style>

</style>
