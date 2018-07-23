// import "whatwg-fetch"
// import SecurityType from '../common/SecurityType'

// import cache from './CacheInfo'

// var MD5 = require("crypto-js/md5");

/**
 * 网络访问Request基类
 */
class Network {
  constructor (params) {
    this.systime = 0
    // {
    // code:
    // msg:
    // }
    this.error = null
    this.params = params
  }
}

export {Network}
