<template>
	<view class="container">
		<view class="box">
			<view class="circle" style="--x:0"></view>
			<view class="circle" style="--x:1"></view>
			<view class="circle" style="--x:2"></view>
			<view class="circle" style="--x:3"></view>
			<view class="circle" style="--x:4"></view>
			<u-form class="login-form" :model="form" ref='myForm'>
				<view class="login-form-title">登录</view>
				<u-form-item prop="username" label-width="100rpx">
					<u-input v-model="form.username" type="string" placeholder="请输入账号"></u-input>
				</u-form-item>
				<u-form-item prop="password">
					<u-input v-model="form.password" type="password" placeholder="请输入密码"></u-input>
				</u-form-item>
				<i class="login-form-tip hvr-bounce-to-left">欢迎使用保护区APP</i>
				<u-button @click="submit" shape="circle" class="hvr-bounce-to-left">登录</u-button>
			</u-form>
		</view>
	</view>
</template>

<script lang="ts" setup>
import api from '../../api/api.js'
import { reactive, ref } from 'vue'
import { onReady } from "@dcloudio/uni-app";

const myForm = ref<any>()

const form = reactive({
	username: "",
	password: "",
	requestType: "App"
})

const rules = {
	username: [{
		required: true,
		message: "请输入账号",
		trigger: "change"
	}],
	password: [{
		required: true,
		message: "密码不小于6位",
		trigger: 'change',
		min: 6
	}]
}

onReady(() => {
	myForm.value.setRules(rules)
})

const submit = () => {
	myForm.value.validate()
		.then(valid => {
			if (valid) {
				form.requestType = 'APP'
				api.login(form).then(res => {
					uni.setStorageSync('userInfo', JSON.stringify(res.userInfo))
					uni.setStorageSync('token', res.tokenInfo.tokenValue)
					uni.redirectTo({
						url: '/pages/index/index'
					})
				})
			}
		})
		.catch(e => {
			console.warn(e)
		})
}
</script>

<style lang="scss" scoped>
::v-deep.u-input--radius[data-v-fdbb9fe6],
.u-input--square[data-v-fdbb9fe6] {
	border-radius: 20px;
}

::v-deep.uni-input-input {
	color: #fff;
}

::v-deep.u-form-item__body[data-v-5e7216f1] {
	margin: 5px;
}

@keyframes animate {

	0%,
	100% {
		transform: translateY(-15px);
	}

	50% {
		transform: translateY(15px);
	}
}

.container {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-image: linear-gradient(45deg, #333566, #b1effe);

	.box {
		position: relative;

		.circle {
			position: absolute;
			backdrop-filter: blur(6px);
			background-color: rgba(255, 255, 255, .1);
			box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
			border: 1px solid rgba(255, 255, 255, .1);
			filter: hue-rotate(calc(var(--x) * 70deg));
			animation: animate 5s linear infinite;
			animation-delay: calc(var(--x) * -2s);
			border-radius: 50%;
		}

		.circle:nth-child(1) {
			top: -80px;
			right: 170px;
			width: 40px;
			height: 40px;
		}

		.circle:nth-child(2) {
			top: -20px;
			right: 10px;
			width: 50px;
			height: 50px;
			z-index: 0;
		}

		.circle:nth-child(3) {
			top: 120px;
			left: 10px;
			width: 60px;
			height: 60px;
			z-index: 2;
		}

		.circle:nth-child(4) {
			bottom: -40px;
			right: 10px;
			width: 70px;
			height: 70px;
			z-index: 2;
		}

		.circle:nth-child(5) {
			bottom: -80px;
			left: 120px;
			width: 60px;
			height: 60px;
			z-index: 0;
		}
	}

	.login-form {
		position: relative;
		margin: 200px auto;
		padding: 30px;
		max-width: 60%;
		height: 280px;
		background-color: rgba(255, 255, 255, .1);
		box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
		border: 1px solid rgba(255, 255, 255, .1);

		.login-form-title {
			color: #FFFFFF;
			font-size: 30px;
			letter-spacing: 5px;
			font-weight: bold;
			text-align: center;
		}

		.login-form-tip {
			font-size: 20px;
			color: #FFFFFF;
			display: block;
			margin: 10px;
		}
	}
}
</style>


