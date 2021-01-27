'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const { 
		user_id,
		value
	} = event
	
	const userinfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userinfo.data[0].article_likes_ids
	
	const list = await db.collection('article')
	.aggregate()
	.addFields({
		is_like: $.in(['$_id', article_likes_ids])
	})
	.match({
		title: new RegExp(value)
	})
	.end()
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '成功',
		data: list.data
	}
};

// 指定一个正整数，跳过对应数量的文档，输出剩下的文档。
// 限制输出到下一阶段的记录数。