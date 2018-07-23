
import Vue from 'vue'
import App from './page'
import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
