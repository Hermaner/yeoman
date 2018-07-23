// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Coupon_ReceiveExCode
  * @param  {Object} params
  * @return {Network}
  */
class Coupon_ReceiveExCode extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'coupon.receiveExCode',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "exCode": "string"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "6000010": "服务器内部异常",
      *  "6000060": "请稍后重试",
      *  "6000070": "您已经领过该券了",
      *  "6001010": "优惠券所属店铺有误",
      *  "6002300": "卡券兑换码有误",
      *  "6002310": "卡券兑换码不存在",
      *  "6002320": "卡券兑换码已使用",
      *  "6002330": "卡券已过期"
      *}
      */
    }
  }
}

export { Coupon_ReceiveExCode }
