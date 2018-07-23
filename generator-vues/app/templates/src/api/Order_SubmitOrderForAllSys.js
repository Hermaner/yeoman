// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Order_SubmitOrderForAllSys
  * @param  {Object} params
  * @return {Network}
  */
class Order_SubmitOrderForAllSys extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'order.submitOrderForAllSys',
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
      *  "4000100": "order unkown error",
      *  "4000200": "订单地址不存在",
      *  "4000401": "购买数量超过活动每人限购数量",
      *  "4000402": "折扣金额大于订单总金额",
      *  "4000403": "购买数量超过活动剩余库存",
      *  "4000404": "活动已经结束",
      *  "4000405": "折扣金额过大，超过订单总金额的30%！",
      *  "4000412": "商品金额超过订单限额",
      *  "4000500": "订单商品库存不足",
      *  "4000600": "订单商品超过限额",
      *  "4000700": "订单商品金额改变",
      *  "4001623": "订单中itemId不存在",
      *  "4001626": "订单收货地址发生变化",
      *  "4001641": "积分使用失败",
      *  "4002300": "购买的多个商品货源地不一致",
      *  "4002400": "购买的多个商品的商品形态不一致",
      *  "4002500": "购买的商品支付卡类型为空",
      *  "4002600": "购买的商品不在配送范围内",
      *  "4002700": "购买的商品不是上架状态",
      *  "4002902": "当前预售活动，支付定金时间已过，已经不能买了",
      *  "4100901": "优惠券使用失败！",
      *  "4100902": "优惠券不在可使用的时间范围内！",
      *  "4100903": "渠道不正确！",
      *  "4100904": "终端不正确！",
      *  "4100905": "使用的优不满足满减条件！",
      *  "4100906": "使用的优惠券金额超过商品总金额的30%！",
      *  "4100907": "商品在优惠券黑名单中！"
      *}
      */
    }
  }
}

export { Order_SubmitOrderForAllSys }
