// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Shopcart_UpdateItemNumForCart
  * @param  {Object} params
  * @return {Network}
  */
class Shopcart_UpdateItemNumForCart extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'shopcart.updateItemNumForCart',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "mallId": "string",
      *  "cartType": "string",
      *  "storeId": "string",
      *  "itemId": "string",
      *  "num": "int",
      *},
      *OPTIONAL: {
      *  "itemGroupKey": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "7000100": "请求参数有误",
      *  "7000900": "商品不在购物车内"
      *}
      */
    }
  }
}

export { Shopcart_UpdateItemNumForCart }
