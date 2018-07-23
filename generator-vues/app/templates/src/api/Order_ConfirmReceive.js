// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_ConfirmReceive
  * @param  {Object} params
  * @return {Network}
  */
class Order_ConfirmReceive extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.confirmReceive',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "orderId": "string"
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

export { Order_ConfirmReceive }
