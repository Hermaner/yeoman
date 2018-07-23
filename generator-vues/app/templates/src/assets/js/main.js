require('assets/css/common.css')

// 注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了

import { ToastPlugin, AlertPlugin, ConfirmPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

import Vue from 'vue'
// import 'lib-flexible'
import 'animated-vue'
import 'animate.css/animate.css'
// import './global.less'
// import '@/assets/css/global.less'

import 'mint-ui/lib/style.css'

// import vueFilter from './vueFilter';
import './constants/globalVar'
import './common/CacheInfo'
import router from './router'
import storage from './storage'
import './filters'
Vue.use(router)
Vue.use(storage)

import FastClick from 'fastclick'
FastClick.attach(document.body)
