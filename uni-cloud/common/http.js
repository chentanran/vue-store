export default function $http(option) {
	const { url, data } = option
	const obj = {
		user_id: '5fd0d3ac6463510001f6b655',
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