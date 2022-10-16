import { get, post } from '@/common/requestPackage'

// post请求，获取菜单
export default {
  login: args => post('/auth/appLogin', args),
  // 生物多样性查询
	freeQuery: args => get(`/patrol-polling/info/${args}`),
  // 生物多样性
	freeAdd: args => post('/patrol-polling/free/diversity/add', args),
  // 生物多样性列表
	freeList: args => get('/patrol-polling/free/diversity/list', args),
  // 问题隐患字典
	// issueDic: args => http.get(`/dict-data/getByDicKind?dicKind=${args.dicKind}`),
	issueDic: args => get(`/dict-data/getByDicKind`, args),
   // 问题隐患查询
	issueQuery: args => get(`/patrol-polling/free/info/${args}`),
  // 问题隐患添加
	issueAdd: args => post('/patrol-polling/free/add', args),
  // 待办问题隐患添加
	backlogIssueAdd: args => post('/patrol-polling/app/add', args),
  // 问题隐患列表
	issueList: args => get('/patrol-polling/free/list', args),
  // 我的待办列表
	backlogList: args => get('/task/myTask', args),
  // 我的待办整改详情
	rectifyInfo: args => get(`/patrol-rectification/app/info/${args}`),
  // 我的待办整改提交
	rectifySubmit: args => post(`/patrol-rectification/add`, args),
  // 我的待办编写详情
	fillInfo: args => get(`/patrol-task-trigger/app/info/${args}`),
	// 网格查询
	gridList: args => get('/patrol-safety-grid/query', args),
	// 文件上传
	upload: args => post('/file/upload', args),
	// 图片查询
	queryPic: args => get(`/file/getByBiz?bizId=${args}`),
	
	// getPositions: args => get(`/patrol-task-trigger/app/info/${args}`)
	
	getPositions: args => post('/patrol-task-trigger/app/info', args),

	getMark: args => post('/patrol-task-trigger/app/card', args),
	
	// 获取隐患列表
	getTroubleList: args => get('/patrol-polling/app/listByTaskId', args),
	
	// 预提交
	preSubmit: args => post('/patrol-polling/app/preCommit', args),
	
	// 提交
	submit: args => post('/patrol-polling/app/submit', args),

	// 无隐患
	noTrouble: args => post('/patrol-polling/app/normal', args),

	// OA 模块
	getFlow: args =>get('/user/queryFlowAssignee', args),

	// 请假
	leave: args => post('/leave/save', args),

	// 出差
	business: args => post('/travel/save', args),

	// 出差列表
	getBusinessList: args => get('/travel/list', args),

	// 请假列表
	getLeaveList: args => get(`/leave/list/`, args),
	// 请假列表
	getLeavemyLeave: args => get(`/leave/myLeave/`, args),

	// 请假详情
	getLeaveInfo: args => get(`/leave/get`, args),

	// 出差详情
	getBusinessInfo: args => get(`/travel/get`, args),

	getList: args => get('/task/myTask', args),

	// 请假审批
	leaveApproval: args => post('/leave/audit', args),

	// 出差审批
	businessApproval: args => post('/travel/audit', args),
	
	// 预提交详情
	preDetail: arg => get(`/patrol-polling/info/${arg}`),
	
	delPic: arg => get(`/file/del?id=${arg}`),

	// 接待列表
	receiveTask: args => get('/task/receiveTask', args),
	// 接待详情
	receiveInfo: id => get(`/approve/receive/info/${id}`),
	// 接待审批
	receiveAudit: args => post(`/approve/receive/audit`, args),
	// 差旅列表
	travelTask: args => get('/task/travelTask', args),
	// 差旅详情
	travelInfo: id => get(`/approve/travel/info/${id}`),
	// 差旅审批
	travelExamine: args =>  post(`/approve/travel/travelExamine`, args),
	
	// 派车列表
	sendCarTask: args => get('/task/sendCarTask', args),
	// 派车详情
	sendCarInfo: args => get('/sendCar/get', args),
	// 派车处理
	sendCarAudit: args => post(`/sendCar/audit`, args),
	
	//OA模块待办
	oaTask: args =>  get(`/task/oaTask`, args),
	
	// 用印申请列表
	useSealTask: args => get('/task/useSealTask', args),
	// 用印详情
	useSealInfo: id => get(`/approve/useSeal/info/${id}`),
	// 审批处理
	useSealAudit: args => post(`/approve/useSeal/audit`, args),
	// 查询附件
	queryTblAttachFileListByParameter: args => get('/attachFile/queryTblAttachFileListByParameter', args)
} 
