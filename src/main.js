import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
