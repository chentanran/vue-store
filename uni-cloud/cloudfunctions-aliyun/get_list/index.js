'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const { 
		name,
		page = 1,
		pageSize = 10
	} = event
	
	let matchObj = {}
	if (name !== '全部') {
		matchObj = { classify: name }
	}
	
	const list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content: 0
	})
	.skip(pageSize * (page - 1))
	.limit(pageSize)
	.end()
	
	// const list = await db.collection('article')
	// .field({
	// 	content: false
	// }).get()
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '成功',
		data: list.data
	}
};

// 指定一个正整数，跳过对应数量的文档，输出剩下的文档。
// 限制输出到下一阶段的记录数。