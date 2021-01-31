import store from '../store/index.js'

export default function $http(option) {
	const { url, data } = option
	const obj = {
		user_id: store.state.userinfo._id,
		...data
	}
	
	return new Promise((resolve, reject) => {
		
		uniCloud.callFunction({
			name: url,
			data: obj
		}).then(res => {
			const { result } = res
			if (result.code === 200) {
				resolve(result)
			} else {
				reject(result)
			}
		}).catch((err) => {
			reject(err)
		})
	})
}