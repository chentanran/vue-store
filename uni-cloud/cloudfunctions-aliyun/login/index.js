'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('login')
	
	// 查询
	const res = await collection.where({
		username: '123'
	}).get()
	
	// 删除
	// const res = await collection.doc('5fcf84c8fbd6de00011f724d').remove()
	
	// 新增
	// let res = await collection.add({
	// 	username: '123',
	// 	password: '111'
	// })
	//event为客户端上传的参数
	console.log(JSON.stringify(res))
	//返回数据给客户端
	return {
		code: 200,
		msg: '成功'
	}
};
