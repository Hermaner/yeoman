// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowActivity_GetItemActivityInfo
  * @param  {Object} params
  * @return {Network}
  */
class WowActivity_GetItemActivityInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowActivity.getItemActivityInfo',
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
      *  "8000001": "活动不存在",
      *  "8000003": "服务器错误"
      *}
      */
    }
  }
}

export { WowActivity_GetItemActivityInfo }
