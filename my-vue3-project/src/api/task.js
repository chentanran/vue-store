import { get, post } from '@/common/requestPackage'

export default {
	// 行政代办
  userTaskAll: args => get('/task/userTaskAll', args),
	// 专项管理
  myPackTask: args => get('/task/myPackTask', args),
	// 代办任务
	myTask: args => get('/task/myTask', args),
	// 已办任务
	myFinishedTask: args => get('/task/myFinishedTask', args),
	// 工单详情
	workInfo: id => get(`/patrol-rectification/app/info/${id}`),
	// 工单完成
	appComplete: args => post(`/patrol-rectification/appComplete`, args)
}