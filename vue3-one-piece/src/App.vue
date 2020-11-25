<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <ValidateForm @form-submit="handlesSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址：</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱"
        ></ValidateInput>
        <span>{{ emailVal }}</span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码：</label>
        <ValidateInput
          type="password"
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入密码"
        ></ValidateInput>
      </div>
      <template v-slot:submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </ValidateForm>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
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
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')

    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱地址不能为空' },
      { type: 'email', message: '邮箱格式不正确' }
    ]

    const passwordRules: RulesProp = [
      { type: 'required', message: '面不能为空' }
    ]

    const handlesSubmit = (formValid: boolean) => {
      if (formValid) {
        console.log(emailVal.value, passwordVal.value, '--------------')
      }
    }

    return {
      list: testData,
      user: userData,
      emailRules,
      emailVal,
      handlesSubmit,
      passwordRules,
      passwordVal
    }
  }
})
</script>

<style>
</style>
