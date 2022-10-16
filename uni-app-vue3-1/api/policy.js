import { get, post } from '@/common/requestPackage'

export default {
	// 政策法规列表
  policyList: args => get('/document/list', args),
	// 政策法规详情
  policyDetail: args => get('/document/get', args),
	// 附件查询
	queryFile: args => get(`/attachFile/get?id=${args}`)
}