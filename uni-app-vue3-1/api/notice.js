import { get, post } from '@/common/requestPackage'

export default {
	// 公告列表
  apiNoticeList: args => get('/announcement/home/noticeList', args),
	// 根据ID查询 公告详情
  apiNoticeDetail: args => get(`/announcement/get`, args),
	// 根据ID查询 公告已读未读
  apireadNotice: args => get(`/announcement/app/readNotice`, args),
}