<template>
  <div class="container">
    <Loader
      text="加载中..."
      v-if="loading"
    />
    <div>
      <GlobalHeader :user="user"></GlobalHeader>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader.vue'
import Loader from '@/components/Loader.vue'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup () {
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })

    return {
      user: currentUser,
      loading
    }
  }
})
</script>

<style>
</style>
