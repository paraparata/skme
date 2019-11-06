import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import routes from './plugins/routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
