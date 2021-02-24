import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import 'amfe-flexible'
import http from './utils/request'
Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
