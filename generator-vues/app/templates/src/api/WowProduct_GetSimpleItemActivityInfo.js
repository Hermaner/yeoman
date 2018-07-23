// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowProduct_GetSimpleItemActivityInfo
  * @param  {Object} params
  * @return {Network}
  */
class WowProduct_GetSimpleItemActivityInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowProduct.getSimpleItemActivityInfo',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "activityId": "long",
      *  "pageIndex": "int",
      *  "pageSize": "int"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "2000006": "参数错误",
      *  "2000010": "业务内部错误"
      *}
      */
    }
  }
}

export { WowProduct_GetSimpleItemActivityInfo }
