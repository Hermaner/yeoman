/* eslint-disable camelcase */
import networkContext from './NetworkContext'
import { Network } from './Network'
import SecurityType from './SecurityType'
import config from '../config'
import 'whatwg-fetch'
/**
 * 网络访问
 */
class NetworkAccessor {
  /**
   * 单例
   * @return {NetworkAccessor} 网络访问
   */
  static getInstance () {
    if (!NetworkAccessor.instance) {
      NetworkAccessor.instance = new NetworkAccessor()
    }
    return NetworkAccessor.instance
  }
  /**
   * token过期后， 更新token
   * @param  {[Network]} networks 请求实体
   * @param  {[Function]} resolve 成功回调
   * @param  {[Function]} reject  失败回调
   * @return {[type]} 无
   */
  renewToken (networks, resolve, reject) {
   // todo
  }

  /**
   * 上传文件
   * @param  {[String]} filePath 文件路径
   * @return {[Promise]} Promise
   */
  getFileUrl (filePath, fileType = 'CPRODUCT_IMG.jpeg') {
    let network = new Network()
    network.params = {
      'n': fileType
    }
    network.api = {
      SECURITY_TYPE: SecurityType.None
    }
    let params = networkContext.buildRequestsData([network])
    let body = this._encodeParams(params)

    return config.HOST_FILE_URI + body
  }

  /**
   * 参数URLEncode， 并转换成字符串
   * @param  {Object} params 参数
   * @return {String} 转换结果
   */
  _encodeParams (params) {
    let body = ''

    for (var key in params) {
      body = body + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
    }

    body = body.substring(0, body.length - 1)

    return body
  }

  /**
   * 发起一个请求
   * @param  {Network} network Request
   * @return {Promise}         Promise
   */
  sendRequest (network) {
    return this.sendRequests([network])
  }
  /**
   * 发起多个请求
   * @param  {Network} network Request
   * @return {Promise}         Promise
   */
  sendRequests (networks) {
    let promise = new Promise((resolve, reject) => {
      this.request(networks, resolve, reject)
    })
    return promise
  }

  request (networks, resolve, reject, type = 'GET') {
    let params = networkContext.buildRequestsData(networks)
    let body = this._encodeParams(params)
    fetch(config.HOST_URI, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body,
      method: 'POST'
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        reject({
          code: 101,
          msg: '服务器异常'
        })
      }
    }).then((response) => {
      this.handleResponse(response, networks, resolve, reject)
    }).catch((error) => {
      reject({
        code: 101,
        msg: error.message
      })
    })
  }
  handleResponse (response, networks, resolve, reject) {
    if (response.stat.code === 0) {
      if (response.stat.stateList && response.stat.stateList.length === networks.length) {
        let stateList = response.stat.stateList
        let stateLength = stateList.length
        let errorCount = 0
        let firstError = null
        for (var i = 0; i < stateLength; i++) {
          let state = stateList[i]
          let network = networks[i]
          network.systime = response.stat.systime
          if (state.code !== 0) {
            network.error = state
            errorCount++
            if (i === 0) {
              firstError = state
            }
          }
        }

        if (errorCount === 0 || errorCount < networks.length) {
          if (networks.length === 1) {
            resolve(response.content[0])
          } else {
            resolve(response.content)
          }
        } else {
          reject({
            code: firstError.code,
            msg: firstError.msg
          })
        }
      }
    } else if (response.stat.code === -300) {
      this.$route.push('home')
      // todo 过期跳转登录
      // todo clearCache
      this.renewToken(networks, resolve, reject)
    } else if (response.stat.code === -360 || response.stat.code === -180) {
      // todo clearcache
      this.$route.push('home')
      reject({
        code: response.stat.code,
        msg: '登录已过期'
      })
    } else {
      reject({
        code: response.stat.code,
        msg: '服务器返回未知错误'
      })
    }
  }
}

const networkAccessor = NetworkAccessor.getInstance()

export default networkAccessor
