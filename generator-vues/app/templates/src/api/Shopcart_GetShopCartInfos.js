// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Shopcart_GetShopCartInfos
  * @param  {Object} params
  * @return {Network}
  */
class Shopcart_GetShopCartInfos extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'shopcart.getShopCartInfos',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "mallId": "string"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "7000100": "请求参数有误",
      *  "7000700": "购物车内商品总价费用为0"
      *}
      */
    }
  }
}

export { Shopcart_GetShopCartInfos }
