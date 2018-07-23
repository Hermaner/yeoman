// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_RequestPay
  * @param  {Object} params
  * @return {Network}
  */
class Order_RequestPay extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.requestPay',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "payType": "string",
      *},
      *OPTIONAL: {
      *  "payOrderId": "string",
      *  "orderId": "string",
      *  "extInfo": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "4000100": "order unkown error",
      *  "4001500": "请求支付系统失败",
      *  "4001504": "订单当前状态不允许支付",
      *  "4001700": "满足查询条件的订单不存在"
      *}
      */
    }
  }
}

export { Order_RequestPay }
