<template>
  <div class="login-container">
    <!-- <LoginCanvas/> -->
    <section>
      <div>
        <span>ts demo</span>
        <!-- <lang-select class="set-language" /> -->
      </div>
      <el-form
        status-icon
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
        <el-form-item prop="mobilePhone">
          <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入手机号"
            v-model="loginForm.mobilePhone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <footer>
          <el-button type="primary" @click.native.prevent="handleLogin">{{'登录'}}</el-button>
        </footer>
      </el-form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'
import { UserModule } from '@/store/modules/user'

interface LoginForm {
  mobilePhone: string,
  password: string
}

@Component({
  name: 'login'
})
export default class extends Vue {
  private loading: boolean = false;
  private get pageSize() {
    return 10;
  }

  private loginForm:LoginForm = {
    mobilePhone: '',
    password: ''
  }

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        console.log(this.loginForm)
        await UserModule.Login({
          ...this.loginForm,
          router: this.$router
        })
      }
    })
  }

  // 手机号验证
  private validatorMobilePhone = (
    rule: any,
    value: string,
    callback: Function
  ) => {
    if (!value.trim()) {
      callback(new Error('请输入手机号'))
    } else {
      callback()
    }
  }
  // 验证密码长度
  private validatePassword = (
    rule: any,
    value: string,
    callback: Function
  ) => {
    if (value.length < 6) {
      callback(new Error('密码长度不能小于6位'))
    } else {
      callback()
    }
  }

  private loginRules = {
    mobilePhone: [{ validator: this.validatorMobilePhone, trigger: 'blur' }],
    password: [{ validator: this.validatePassword, trigger: 'blur' }]
  }
}
</script>

<style>
</style>