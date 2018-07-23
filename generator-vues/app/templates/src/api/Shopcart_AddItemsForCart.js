// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Shopcart_AddItemsForCart
  * @param  {Object} params
  * @return {Network}
  */
class Shopcart_AddItemsForCart extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'shopcart.addItemsForCart',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "mallId": "string",
      *  "items": "json"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "7000100": "请求参数有误",
      *  "7000201": "该商品不支持加入购物车",
      *  "7000202": "添加进购物车的商品列表为空",
      *  "7000203": "添加进购物车的商品超过限购",
      *  "7000205": "添加购物车没有获取到具体大店",
      *  "7000800": "您的购物车已满"
      *}
      */
    }
  }
}

export { Shopcart_AddItemsForCart }
