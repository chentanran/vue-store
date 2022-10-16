import { baseURL } from '@/common/requestPackage.js'

const gotoWebView = (fileId, title) => {
	const url = baseURL + `/file/previewPDF?id=${fileId}`
	uni.navigateTo({
		url: `/components/webView/index?url=${url}&title=${title}`
	})
}

const gotoOpenView = (fileId) => {
	const url = fileId
	uni.navigateTo({
		url: `/components/openView/index?url=${url}`
	})
}

export {
	gotoWebView,
	gotoOpenView
}