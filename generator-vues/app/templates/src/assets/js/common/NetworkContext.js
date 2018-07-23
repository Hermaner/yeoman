import SecurityType from './SecurityType'

// var MD5 = require('crypto-js/md5')
import { md5 } from 'vux'
// var Cookie = require('js-cookie/src/js.cookie')

/**
 * 网络访问参数整理加签加签
 */
class NetworkContext {
  init () {
    // var url = window.location.href
  }

  buildRequestsData (networks, token) {
    let securityType = SecurityType.None
    let length = networks.length
    let params = {}
    let methods = []

    for (var index = 0; index < length; index++) {
      let network = networks[index]
      let key

      securityType = securityType | network.api.SECURITY_TYPE
      methods.push(network.api.METHOD_NAME)
      for (key in network.params) {
        let newKey = length === 1 ? key : index + '_' + key
        params[newKey] = network.params[key]
      }
    }

    params['_mt'] = methods.join(',')

    // 过滤所有的undefined和null的数据
    for (var key in params) {
      var value = params[key]
      if (value === undefined || value === null) {
        delete params[key]
      }
    }

    // 将参数附加上必须要传递的标记
    params['_aid'] = global.gConst.APP_ID
    params['_sm'] = 'md5'

    if (securityType === SecurityType.None || securityType & SecurityType.RegisteredDevice) {
      params['_sig'] = this.encrypt(params, 'sfhaitao.xyz!')
    } else if (securityType & SecurityType.UserLogin) {
      params['_sig'] = this.encrypt(params, token)
    }

    return params
  }

  /**
   * 加签
   * @return  加签
   */
  encrypt (params, appendWord) {
    var arr = []

    // 将Map变成Array，使用key=value的方式进行拼接
    for (var key in params) {
      arr.push(key + '=' + params[key])
    };

    // 以ascii进行排序
    arr.sort()

    // 将队列拼接成String
    var str = arr.join('')
    str = str + appendWord

    // 做md5加密
    return md5(str)
  }
}

const content = new NetworkContext()

export default content
