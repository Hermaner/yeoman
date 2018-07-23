import networkAccessor from './NetworkAccessor'
import StoreuserWebLogin from 'api/StoreuserWebLogin'
import UserLogout from 'api/UserLogout'

export default {
  _init: function () {
    if (!this.options.Vue.axios) {
      return 'axios.js : Vue.axios must be set.'
    }
  },

  _interceptor: function (req, res) {
    var _this = this
    if (req) {
      this.options.Vue.axios.interceptors.request.use(function (request) {
        req.call(_this, request)
        return request
      })
    }

    if (res) {
      this.options.Vue.axios.interceptors.response.use(function (response) {
        res.call(_this, response)
        return response
      })
    }
  },

  _invalidToken: function (res) {
    if (res.status === 401) {
      this.logout()
    }
  },

  _httpData: function (res) {
    return res.data || {}
  },

  _http: function (data) {
    // this.options.Vue.axios({
    //   url: 'https://m.fengqu.com/m.api',
    //   transformResponse: [(data) => {
    //     return JSON.parse(data.replace(/T00:00:00/g, ''))
    //   }],
    //   params: data.data
    // }).then((response) => {
    //   data.success(response)
    // }).catch((error) => {
    //   data.error(error)
    // })
    if (data.url === 'login') {
      const network = new StoreuserWebLogin(data.data)
      networkAccessor.sendRequest(network)
        .then((result) => {
          data.success(result)
        })
        .catch((error) => {
          data.error(error)
        })
    } else if (data.url === 'logout') {
      const network = new UserLogout({})
      networkAccessor.sendRequest(network)
        .then((result) => {
          data.success(result)
        })
        .catch((error) => {
          data.error(error)
        })
    }
  },

  _getHeaders: function (res) {
    return res.headers
  },

  _setHeaders: function (req, headers) {
    req.headers.common = Object.assign(req.headers.common, headers)
  }
}
