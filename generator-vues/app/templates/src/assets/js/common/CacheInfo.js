
import { cookie } from 'vux'

class CacheInfo {
  static getInstance () {
    if (!CacheInfo.instance) {
      CacheInfo.instance = new CacheInfo()
    }

    return CacheInfo.instance
  }

  getHashParams (url) {
    if (url) {
      const urls = url.split('#')
      let result = {}

      if (urls.length === 2) {
        const param = urls[1]

        const params = param.split('&')
        if (params.length > 0) {
          for (let index = 0; index < params.length; index++) {
            const oneParam = params[index]
            const oneParams = oneParam.split('=')

            if (oneParams.length > 0) {
              result[decodeURIComponent(oneParams[0])] = decodeURIComponent(oneParams[1])
            }
          }
        }
      }

      return result
    }
  }

  constructor () {
    let url = window.location.href
    let params = this.getHashParams(url)
    this.data = {}

        // 从url中获取， 获取不到的情况从 localstorage获取
    if (params.deviceId) {
      this.setDeviceId(params.deviceId)
      this.setToken(params.token)
      this.setUserInfo(params.cookieInfo)
      this.setCsrfToken(params.csrfToken)
      this.setAppId(params.appId)
    } else {
      this.data.deviceId = cookie.get('__da')
      this.data.token = cookie.get(global.gConst.APP_ID + '_tk')
      this.data.userInfo = cookie.get(global.gConst.APP_ID + '_uinfo')
      this.data.appId = cookie.get('_aid')
      this.data.csrfToken = cookie.get(global.gConst.APP_ID + '_ct')
    }
  }

    /**
     * Api_USER_RegisterResp
     string	deviceToken	//device token
     long	deviceId	//device id
     string	deviceSecret	//device secret
     * @returns {*|string}
     */
  getDeviceId () {
    return this.data.deviceId || cookie.get('__da')
  }

  getToken () {
    return this.data.token || cookie.get(global.gConst.APP_ID + '_tk')
  }

  getUserInfo () {
    return this.data.userInfo || cookie.get(global.gConst.APP_ID + '_uinfo')
  }

  getAppId () {
    return this.data.appId || cookie.get('_aid')
  }

  getCsrfToken () {
    return this.data.csrfToken || cookie.get(global.gConst.APP_ID + '_ct')
  }

  setDeviceId (deviceId) {
    this.data.deviceId = deviceId
    cookie.set('__da', deviceId)
  }

  setToken (token) {
    this.data.token = token
    cookie.set(global.gConst.APP_ID + '_tk', token)
  }

  setUserInfo (userInfo) {
    this.data.userInfo = userInfo
    cookie.set(global.gConst.APP_ID + '_uinfo', userInfo)
  }

  setAppId (appId) {
    this.data.appId = appId
    cookie.set('_aid', appId)
  }

  setCsrfToken (csrfToken) {
    this.data.csrfToken = csrfToken
    cookie.set(global.gConst.APP_ID + '_ct', csrfToken)
  }

  isLogin () {
    return !!this.getToken()
  }

  clear () {
    this.setUserInfo(null)
    this.setToken(null)
  }
}

const cache = CacheInfo.getInstance()

export default cache
