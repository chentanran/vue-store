<template>
  <div class="home">
    <Suspense>
      <template #default>
        <AsyncComponent></AsyncComponent>
      </template>
      <template #fallback>
        <div>
          loading...
        </div>
      </template>
    </Suspense>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { onErrorCaptured, onMounted, ref } from 'vue'
import AsyncComponent from '../components/AsyncComponents.vue'
import Axios from 'axios'
export default {
  name: 'home',
  components: {
    AsyncComponent
  },
  setup() {
    const error = ref('')

    onErrorCaptured((e: any) => {
      error.value = e
    })

    onMounted(() => {
      Axios.get('https://www.baidu.com', {
        params: {
          ID: [1,2,3,4,5,6]
        }
      }).then(res => {
        console.log(res)
      })
    })

    return {
      error
    }
  }
}

</script>
