// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Coupon_GetValidMerchantCouponMerType
  * @param  {Object} params
  * @return {Network}
  */
class Coupon_GetValidMerchantCouponMerType extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'coupon.getValidMerchantCouponMerType',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "couponMerType": "string",
      *},
      *OPTIONAL: {
      *  "pgIndex": "int",
      *  "pgSize": "int"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "6000010": "服务器内部异常",
      *  "6000020": "参数错误"
      *}
      */
    }
  }
}

export { Coupon_GetValidMerchantCouponMerType }
