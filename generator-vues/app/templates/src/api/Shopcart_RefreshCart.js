// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Shopcart_RefreshCart
  * @param  {Object} params
  * @return {Network}
  */
class Shopcart_RefreshCart extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'shopcart.refreshCart',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "mallId": "string",
      *  "cartType": "string",
      *  "items": "json"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "7000100": "请求参数有误"
      *}
      */
    }
  }
}

export { Shopcart_RefreshCart }
