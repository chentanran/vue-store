<template>
  <div class="home">
    <!-- <Ref></Ref> -->
    <!-- <Reactive></Reactive> -->
    <DogImage></DogImage>
  </div>
</template>

<script lang="ts">
// import Ref from '../components/Ref.vue'
// import Reactive from '../components/Reactive.vue'
// import Watch from '../components/watch.vue'
// import Mouse from '../components/Mouse.vue'
import DogImage from '../components/DogImage.vue'
// setup 函数的用法，可以代替 Vue2 中的 date 和 methods 属性，直接把逻辑卸载 setup 里就可以
// ref 函数的使用，它是一个神奇的函数，我们这节只是初次相遇，要在template中使用的变量，必须用ref包装一下
// return出去的数据和方法，在模板中才可以使用，这样可以精准的控制暴漏的变量和方法
export default {
  name: 'home',
  components: {
    DogImage
  }
}

</script>
