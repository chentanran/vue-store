import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

Vue.use(Router);

export const constantRoutes: RouteConfig[] = []

export const asyncRoutes: RouteConfig[] = []

const routes = [
  {
    path: '/',
    name: 'app',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue')
  }
];


const createRouter = () => new Router({
  scrollBehavior: (to, form, savedPosition) => {
    if (savedPosition) {
      // 当且仅当 position 导航(通过浏览器的 前进/后退 按钮触发) 时才可用
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export default router;
