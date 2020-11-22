<template>
  <div>
    <img :src="result[0].url" alt="">
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  async setup() {
    const result = ref(null)

    const res = await axios.get('http://api.thecatapi.com/v1/images/')

    result.value = res.data

    return {
      result
    }
  }
}
</script>

<style>

</style>