// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowProduct_GetSimpleItemInfoList
  * @param  {Object} params
  * @return {Network}
  */
class WowProduct_GetSimpleItemInfoList extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowProduct.getSimpleItemInfoList',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "itemIdList": "long"
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

export { WowProduct_GetSimpleItemInfoList }
