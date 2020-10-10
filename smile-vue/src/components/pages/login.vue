<template>
  <div>
    <van-nav-bar title="用户登录" left-text="返回" left-arrow @click-left="goBack" />
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
      <van-field name="checkboxGroup" label="复选框组">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
            <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <div class="register-button">
        <van-button :loading="openLoading" @click="registerAction" type="primary" size="large">马上注册</van-button>
      </div>
    </div>
    <div>
      <!-- <vxe-table :data="tableData">
        <vxe-table-column type="seq" title="Sequence number" width="80"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="address" title="Address"></vxe-table-column>
      </vxe-table>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      checkboxGroup: [],
      username: "",
      password: "",
      openLoading: false,
      usernameErrorMsg: "",
      passwordErrorMsg: "",
      tableData: [
        {
          id: 10001,
          name: "Test1",
          role: "Develop",
          sex: "Man",
          address: "Shenzhen"
        },
        {
          id: 10002,
          name: "Test2",
          role: "Test",
          sex: "Man",
          address: "Guangzhou"
        },
        {
          id: 10003,
          name: "Test3",
          role: "PM",
          sex: "Man",
          address: "Shanghai"
        }
      ]
    };
  },
  created() {
    if (localStorage.userInfo) {
      Toast.success("您已经登录");
      this.$router.push("/");
    }
  },
  methods: {
    // 验证方法
    checkForm() {
      let isOk = true;
      if (this.username.length < 5) {
        this.usernameErrorMsg = "用户名不能小于5位";
        isOk = false;
      } else {
        this.usernameErrorMsg = "";
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = "密码不能少于6位";
        isOk = false;
      } else {
        this.passwordErrorMsg = "";
      }
      return isOk;
    },
    // 注册
    registerAction() {
      this.checkForm() && this.axiosLoginUser();
    },
    //*********axios注册用户方法********
    axiosLoginUser() {
      //先把按钮进行loading状态，防止重复提交
      this.openLoading = true;

      axios({
        url: url.login,
        method: "post",
        data: {
          userName: this.username,
          password: this.password
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200 && response.data.message) {
            Toast.success("登录成功");
            this.$router.push("/");
          } else {
            Toast.fail("登录失败");
            this.openLoading = false;
          }
        })
        .catch(error => {
          console.log(error);
          Toast.fail("登录失败");
          this.openLoading = false;
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