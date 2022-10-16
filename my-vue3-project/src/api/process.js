import { get, post } from '@/common/requestPackage'

export default {
	// 新闻详情
  processInfo: args => get('/processControl/get', args)
}