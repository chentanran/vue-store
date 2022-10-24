<template>
  <div id="app">
    <HelloWorld v-if="false" />
    <Management v-else />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Management from './management/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Management
  }
}
</script>

<style>
  html,
  body,
  #app{
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
