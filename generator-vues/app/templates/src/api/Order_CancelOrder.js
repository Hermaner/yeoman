// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_CancelOrder
  * @param  {Object} params
  * @return {Network}
  */
class Order_CancelOrder extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.cancelOrder',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "orderId": "string",
      *},
      *OPTIONAL: {
      *  "operator": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "4000100": "order unkown error",
      *  "4100600": "请求参数有误",
      *  "4100800": "订单取消用户和订单用户不匹配",
      *  "4100914": "订单包裹状态不允许取消",
      *  "4101200": "订单取消失败"
      *}
      */
    }
  }
}

export { Order_CancelOrder }
