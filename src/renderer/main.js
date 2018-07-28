import Vue from 'vue'
import axios from 'axios'
import VueFlashMessage from 'vue-flash-message'

import App from './App'
import router from './router'
import store from './store/store'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import Aside from './components/Aside.vue'
require('vue-flash-message/dist/vue-flash-message.min.css')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('aside-bar', Aside)
Vue.component('icon', Icon)

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 2000,
  }
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
