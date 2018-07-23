// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class WowActivity_GetSimpleActivityInfo
  * @param  {Object} params
  * @return {Network}
  */
class WowActivity_GetSimpleActivityInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'wowActivity.getSimpleActivityInfo',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "activityId": "long"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "8000000": "参数错误",
      *  "8000001": "活动不存在",
      *  "8000010": "活动未知错误"
      *}
      */
    }
  }
}

export { WowActivity_GetSimpleActivityInfo }
