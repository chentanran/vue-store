import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css'
import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'
import './permission'
import SvgIcon from 'vue-svgicon'
import i18n from '@/lang'

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
