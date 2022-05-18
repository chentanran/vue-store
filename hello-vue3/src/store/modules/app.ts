import { defineStore } from 'pinia'
import { store } from '../index'
import { useCache } from '@/hooks/web/useCache'
import { appModules } from '@/config/app'
import type { AppState, LayoutType, ThemeTypes } from '@/config/app'

const { wsCache } = useCache()

export const useAppStore = defineStore({
	id: 'app',
	state: (): AppState => appModules,
	persist: {
		enabled: true
	},
	getters: {
		getIsDark(): boolean {
      return this.isDark
    },
		getTitle(): string {
      return this.title
    },
    getUserInfo(): string {
      return this.userInfo
    },
    getPageLoading(): boolean {
      return this.pageLoading
    },
	},
	actions: {
		setIsDark(isDark: boolean) {
      this.isDark = isDark
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
      wsCache.set('isDark', this.isDark)
    },
		setTitle(title: string) {
      this.title = title
    },
    setPageLoading(pageLoading: boolean) {
      this.pageLoading = pageLoading
    },
	}
})

export const useAppStoreWithOut = () => {
	return useAppStore(store)
}