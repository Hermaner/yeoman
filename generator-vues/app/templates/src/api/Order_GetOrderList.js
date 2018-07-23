// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_GetOrderList
  * @param  {Object} params
  * @return {Network}
  */
class Order_GetOrderList extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.getOrderList',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "query": "json"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "4000100": "order unkown error",
      *  "4100600": "请求参数有误"
      *}
      */
    }
  }
}

export { Order_GetOrderList }
