
import Vue from 'vue'
import App from './page'
import store from './store'

window.vuer = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
