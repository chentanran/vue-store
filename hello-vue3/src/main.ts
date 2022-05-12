import { createApp } from 'vue'
import App from './App.vue'
// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'
// 引入状态管理
import { setupStore } from '@/store'
// 引入路由
import { setupRouter } from './router'

const setupAll = async () => {
	const app = createApp(App)

	await setupI18n(app)

	setupStore(app)

	setupRouter(app)

	app.mount('#app')
}

setupAll()
