import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/login'
// import Form from '@/components/pages/form'

Vue.use(VueRouter)

const routes = [
 {
   path: '/',
   name: 'ShoppingMall',
   component: ShoppingMall
 },
 {
   path: '/register',
   name: 'Register',
   component: Register
 },
 {
   path: '/login',
   name: 'Login',
   component: Login
 },
//  {
//    path: '/form',
//    name: 'Form',
//    component: Form
//  }
]

const router = new VueRouter({
  routes
})

export default router
