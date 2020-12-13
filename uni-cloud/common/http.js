export default function $http(option) {
	const { url, data } = option
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: url,
			data
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