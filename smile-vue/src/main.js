import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

const Stroage = {
  // 重写setItem事件，当使用setItem的时候，触发，window.dispatchEvent派发事件
  dispatchEventStroage () {
    const signSetItem = localStorage.setItem
    localStorage.setItem = function (key, val) {
      const setEvent = new Event('setItemEvent')
      setEvent.key = key
      setEvent.newValue = val
      window.dispatchEvent(setEvent)
      signSetItem.apply(this, arguments)
    }
  }
}
Vue.use(Stroage)
Stroage.dispatchEventStroage()
 
Vue.use(VXETable)

import { 
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  Field,
  NavBar,
  Checkbox,
  CheckboxGroup 
} from 'vant'

Vue.use(Button)
   .use(Row)
   .use(Col)
   .use(Swipe)
   .use(SwipeItem)
   .use(Lazyload)
   .use(List)
   .use(Field)
   .use(NavBar)
   .use(Checkbox)
   .use(CheckboxGroup)

// Vue.use(vueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
