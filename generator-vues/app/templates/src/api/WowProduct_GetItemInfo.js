// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowProduct_GetItemInfo
  * @param  {Object} params
  * @return {Network}
  */
class WowProduct_GetItemInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowProduct.getItemInfo',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "itemId": "long"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "2000002": "该商品不存在"
      *}
      */
    }
  }
}

export { WowProduct_GetItemInfo }
