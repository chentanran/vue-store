<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      user: currentUser
    }
  }
})
</script>

<style>
</style>
