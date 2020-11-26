<template>
  <div>
    <ValidateForm @form-submit="handlesSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址：</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱"
        ></ValidateInput>
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
    <input @input="handleValue" v-model="inputs">
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'login',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')
    const router = useRouter()
    const inputs = ref('')
    let str = ''
    const store = useStore()

    const handleValue = (e: Event) => {
      const target = e.target as HTMLInputElement

      if (target.value.length > str.length) {
        str += target.value.split('')[target.value.length - 1]
      } else {
        str = str.substring(0, str.length - 1)
      }

      console.log(str, 'str')

      inputs.value = target.value.replace(/\S/gi, '*')
    }

    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱地址不能为空' },
      { type: 'email', message: '邮箱格式不正确' }
    ]

    const passwordRules: RulesProp = [
      { type: 'required', message: '面不能为空' }
    ]

    const handlesSubmit = (formValid: boolean) => {
      if (formValid) {
        router.push({ name: 'home' })
        store.commit('login')
      }
    }

    return {
      emailRules,
      emailVal,
      handlesSubmit,
      passwordRules,
      passwordVal,
      inputs,
      handleValue
    }
  }
}
</script>

<style>

</style>
