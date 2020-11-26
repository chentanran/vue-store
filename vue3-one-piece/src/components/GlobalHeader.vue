<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a class="navbar-brand ml-2" href="#">知乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0 px-4">
      <li class="list-inline-item">
        <!-- <a href="#" class="btn btn-outline-light my-2">登录</a> -->
        <router-link class="btn btn-outline-light my-2" :to="{ name: 'login' }">登录</router-link>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0 px-4">
      <li class="list-inline-item">
        <DropDown :title="`你好 ${user.name}`">
          <DropDownItem>
            <a class="dropdown-item" href="#" @click="handleClick">新建文章</a>
          </DropDownItem>
          <DropDownItem disabled>
            <a class="dropdown-item" href="#" >编辑文章</a>
          </DropDownItem>
          <DropDownItem>
            <router-link class="dropdown-item" :to="{ name: 'login' }">退出登录</router-link>
          </DropDownItem>
        </DropDown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as () => UserProps,
      required: true
    }
  },
  setup () {
    const handleClick = () => {
      alert('11111')
    }
    return {
      handleClick
    }
  }
})
</script>

<style>

</style>
