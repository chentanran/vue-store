

import { get, post } from '@/common/requestPackage'

export default {
	// 通讯录
  mailList: args => get('/staff/app/mailList', args),
	// 修改密码
	updatePasswrod: args => post('/staff/updatePwd', args),
	// 获取用户信息
	getUserInfo: args => get(`/staff/detail/${args}`),
}