<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack" />
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        @click-icon="username = ''"
        :error-message="usernameErrorMsg"
      />

      <van-field 
      v-model="password" 
      type="password" 
      label="密码" 
      placeholder="请输入密码" 
      required 
      :error-message="passwordErrorMsg"
      />
      <div class="register-button">
        <van-button :loading="openLoading" @click="registerAction" type="primary" size="large">马上注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: "",
      password: "",
      openLoading: false,
      usernameErrorMsg: '',
      passwordErrorMsg: ''
    };
  },
  methods: {
    // 验证方法
    checkForm(){
      let isOk= true
      if(this.username.length<5){
        this.usernameErrorMsg="用户名不能小于5位"
        isOk= false
      }else{
        this.usernameErrorMsg=''
      }
      if(this.password.length<6){
        this.passwordErrorMsg="密码不能少于6位"
        isOk= false
      }else{
        this.passwordErrorMsg=''
      }
      return isOk
    },
    // 注册
    registerAction() {
      this.checkForm() && this.axiosRegisterUser()
    },
    //*********axios注册用户方法********
    axiosRegisterUser() {
      //先把按钮进行loading状态，防止重复提交
      this.openLoading = true

      axios({
        url: url.registerUser,
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(response => {
          //如果返回code为200，代表注册成功，我们给用户作Toast提示
          if(response.data.code == 200){
              Toast.success('注册成功')
              this.$router.push('/login')
          }else{
              console.log(response.data.message)
              Toast.fail('注册失败')
              this.openLoading=false
          }
        })
        .catch(error => {
          console.log(error);
          this.openLoading=false
        });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 50px;
}
.register-button {
  padding-top: 10px;
}
</style>