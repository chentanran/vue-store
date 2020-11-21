<template>
  <div>
    <div v-if="loading">loading...</div>
    <img v-if="loaded && result !== null" :src="result[0].url" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script lang='ts'>
import useUrlLoading from '@/hooks/useUrlLoading'

const dogApi = 'https://dog.ceo/api/breeds/image/random'
const catApi = 'http://api.thecatapi.com/v1/images/search?limit=1'

interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
}

export default {
  setup() {
    // const { result, error, loading, loaded } = useUrlLoading<DogResult>(dogApi)
    const { result, error, loading, loaded } = useUrlLoading<CatResult[]>(catApi)

    return {
      result,
      error,
      loading,
      loaded
    }
  }
}
</script>

<style>

</style>