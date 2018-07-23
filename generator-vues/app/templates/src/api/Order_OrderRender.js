// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_OrderRender
  * @param  {Object} params
  * @return {Network}
  */
class Order_OrderRender extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.orderRender',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "request": "json"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "4000100": "order unkown error"
      *}
      */
    }
  }
}

export { Order_OrderRender }
