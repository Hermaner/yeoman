// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Coupon_ReceiveCoupon
  * @param  {Object} params
  * @return {Network}
  */
class Coupon_ReceiveCoupon extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'coupon.receiveCoupon',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "couponId": "long",
      *  "type": "string",
      *},
      *OPTIONAL: {
      *  "merchantId": "string",
      *  "receiveChannel": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "6000010": "服务器内部异常",
      *  "6000020": "参数错误",
      *  "6000030": "卡券不存在",
      *  "6000040": "卡券已领完",
      *  "6000050": "目前不在卡券发放有效期内",
      *  "6000060": "请稍后重试",
      *  "6000070": "您已经领过该券了",
      *  "6001010": "优惠券所属店铺有误"
      *}
      */
    }
  }
}

export { Coupon_ReceiveCoupon }
