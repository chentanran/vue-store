import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userinfo: uni.getStorageSync('USERINFO') || {},
		historyList: uni.getStorageSync('_history') || []
	},
	
	mutations: {
		SET_USER_INFO(state, userinfo) {
			state.userinfo = userinfo
		},
		
		SET_HISTORY_LIST(state, history) {
			state.historyList.push(history)
			uni.setStorageSync('_history', state.historyList)
		},
		
		CLEAR_HISTORY_lIST(state) {
			state.historyList = []
			uni.removeStorageSync('_history')
		}
	},
	
	actions: {
		set_user_info({ commit }, userinfo) {
			uni.setStorageSync('USERINFO', userinfo)
			commit('SET_USER_INFO', userinfo)
		},
		
		set_history({commit, state}, history) {
			commit('SET_HISTORY_LIST', history)
		},
		
		clear_history({commit}) {
			commit('CLEAR_HISTORY_lIST')
		}
	}
})

export default store