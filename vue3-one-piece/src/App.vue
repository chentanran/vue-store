<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const userData: UserProps = {
  isLogin: true,
  name: '张三',
  id: 123
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      user: userData
    }
  }
})
</script>

<style>
</style>
