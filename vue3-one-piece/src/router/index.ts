import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ColumnDetail from '../views/ColumnDetail.vue'
import CreatePost from '../views/CreatePost.vue'
import Test from '../views/Test.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/columnDetail',
      name: 'columnDetail',
      component: ColumnDetail
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
