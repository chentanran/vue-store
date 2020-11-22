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
import { onErrorCaptured, ref } from 'vue'
import AsyncComponent from '../components/AsyncComponents.vue'
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

    return {
      error
    }
  }
}

</script>
