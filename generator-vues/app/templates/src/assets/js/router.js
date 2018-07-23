import cache from './common/CacheInfo'

const config = {
  orderlist: {
    path: '/pages/order/list/order-list',
    type: 'mini',
    needLogin: true
  },
  coupon: {
    path: '/pages/usercenter/coupon/couponlist',
    type: 'mini',
    needLogin: true
  },
  login: {
    path: '/pages/usercenter/login/index',
    type: 'mini',
    needLogin: false
  },
  usercenter: {
    path: '/pages/usercenter/usercenter/usercenter',
    needLogin: false,
    type: 'mini',
    inTab: true
  },
  index: {
    path: '/pages/index/index',
    needLogin: false,
    type: 'mini',
    inTab: true
  },
  webview: {
    path: '/pages/webview/webview',
    type: 'mini',
    needLogin: false
  }
    // html场景 用 url
    // web

}

const _getURL = (path, params) => {
  if (!params) {
    return path
  }

  let query = ''
  for (var key in params) {
    let value = params[key]

    if (value === null || value === undefined) {
      continue
    }

    if (typeof (value) === 'string' ||
            typeof (value) === 'boolean' ||
            typeof (value) === 'number') {
      query += key + '=' + value + '&'
    } else {
      query += key + '=' + JSON.stringify(value) + '&'
    }
  }

  return path + '?' + query
}

/*
 * vuejs 	h5或者小程序跳转
 */
// 判断跳转浏览器还是小程序
const _routeTo = (page, params, type) => {
  if (!page) {
    console.log('url不能为空')
    return
  }

    // 需要登录权限
  if (page.needLogin && cache.isLogin()) {
    this.navigateTo(config.login)
  }

  if (window.isMini) {
    let path = page.path
    if (page.type === 'web') {
      path = config.webview.path
      params = params || {}
      params = {
        ...params,
        url: page.url
      }
    }

    window.wx.miniProgram[type]({
      url: _getURL(path, params)
    })
  } else {
    window.location.href = _getURL(page.url)
  }
}

const navigateTo = (page, params) => {
  _routeTo(page, params, 'navigateTo')
}

const redirectTo = (page, params) => {
  _routeTo(page, params, 'redirectTo')
}

const switchTab = (page) => {
  _routeTo(page, null, 'switchTab')
}

// const navigateToWebUrl = (url) => {
// }

const navigateBack = () => {
  if (window.isMini) {
    window.wx.miniProgram.navigateBack()
  } else {
    window.history.back(-1)
  }
}

const dynamicLoadJs = (url) => {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  head.appendChild(script)
}

(() => {
  const ready = () => {
    window.isMini = window.__wxjs_environment === 'miniprogram'
    if (window.isMini) {
      dynamicLoadJs('https://res.wx.qq.com/open/js/jweixin-1.3.0.js')
    }
  }
  if (!window.WeixinJSBridge || !window.WeixinJSBridge.invoke) {
    document.addEventListener('WeixinJSBridgeReady', ready, false)
  } else {
    ready()
  }
})()

export default {
  install: function (Vue) {
    Vue.prototype.$route = {
      navigateTo,
      redirectTo,
      switchTab,
      navigateBack,
      config
    }
  }
}
