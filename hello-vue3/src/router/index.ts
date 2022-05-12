import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
	{
    path: '/',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = []

const router = createRouter({
	history: createWebHashHistory(),
	strict: true,
	routes: constantRouterMap as RouteRecordRaw[],
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
	const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
	router.getRoutes().forEach((route) => {
		const { name } = route
		if (name && !resetWhiteNameList.includes(name as string)) {
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}

export const setupRouter = (app: App<Element>) => {
	app.use(router)
}

export default router