import { get, post } from '@/common/requestPackage'

export default {
	// 政策法规列表
  queryMsg: args => get('/appHome/queryMsg', args),
	// 轮播图
	banner: args => get('/dept/general/getBanner', args)
}