<template>
  <div>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import ColumnList from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore()
    const testData = computed(() => store.state.columns)
    return {
      list: testData
    }
  }
}
</script>

<style>

</style>
