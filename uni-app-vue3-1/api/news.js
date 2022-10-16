import { get, post } from '@/common/requestPackage'

export default {
	// 新闻详情
  newsInfo: args => get('/news/get', args)
}