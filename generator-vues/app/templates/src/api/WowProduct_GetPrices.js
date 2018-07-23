// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowProduct_GetPrices
  * @param  {Object} params
  * @return {Network}
  */
class WowProduct_GetPrices extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowProduct.getPrices',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "itemIds": "long",
      *},
      *OPTIONAL: {
      *  "nr": "boolean"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "2000000": "系统内部异常",
      *  "2000006": "参数错误"
      *}
      */
    }
  }
}

export { WowProduct_GetPrices }
