import Cookies from 'js-cookie'

// App
const sidebarStatuskey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatuskey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatuskey, sidebarStatus)

// User
const tokenKey = 'Admin-Token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)

const langugeKey = 'language'
export const getLanguage = () => Cookies.get(langugeKey)
export const setLanguage = (language: string) => Cookies.set(langugeKey, language)
