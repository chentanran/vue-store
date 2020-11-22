<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
const userData: UserProps = {
  isLogin: true,
  name: '张三',
  id: 123
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '这是test1的简介,啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了这是test1的简介,啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了',
    avatar: 'https://pic1.zhimg.com/v2-384b81fb807dc7ba90a06b8e3a54254a_1440w.jpg?source=172ae18b'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这是test2的简介',
    avatar: 'https://pic1.zhimg.com/v2-384b81fb807dc7ba90a06b8e3a54254a_1440w.jpg?source=172ae18b'
  },
  {
    id: 3,
    title: 'test2专栏',
    description: '这是test2的简介',
    avatar: 'https://pic1.zhimg.com/v2-384b81fb807dc7ba90a06b8e3a54254a_1440w.jpg?source=172ae18b'
  },
  {
    id: 4,
    title: 'test2专栏',
    description: '这是test2的简介',
    avatar: 'https://pic1.zhimg.com/v2-384b81fb807dc7ba90a06b8e3a54254a_1440w.jpg?source=172ae18b'
  },
  {
    id: 5,
    title: 'test2专栏',
    description: '这是test2的简介',
    avatar: 'https://pic1.zhimg.com/v2-384b81fb807dc7ba90a06b8e3a54254a_1440w.jpg?source=172ae18b'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      user: userData
    }
  }
})
</script>

<style>
</style>
