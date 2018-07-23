// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_OrderPriceReCalculate
  * @param  {Object} params
  * @return {Network}
  */
class Order_OrderPriceReCalculate extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.orderPriceReCalculate',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *},
      *OPTIONAL: {
      *  "request": "json"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "4000100": "order unkown error",
      *  "4001651": "缓存失效，请重新刷新页面"
      *}
      */
    }
  }
}

export { Order_OrderPriceReCalculate }
