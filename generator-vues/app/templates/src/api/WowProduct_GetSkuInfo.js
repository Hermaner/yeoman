// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowProduct_GetSkuInfo
  * @param  {Object} params
  * @return {Network}
  */
class WowProduct_GetSkuInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowProduct.getSkuInfo',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "skuId": "long",
      *},
      *OPTIONAL: {
      *  "itemId": "long"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "2000001": "该商品不存在"
      *}
      */
    }
  }
}

export { WowProduct_GetSkuInfo }
