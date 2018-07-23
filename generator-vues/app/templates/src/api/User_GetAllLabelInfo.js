// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_GetAllLabelInfo
  * @param  {Object} params
  * @return {Network}
  */
class User_GetAllLabelInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.getAllLabelInfo',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *}
      */
    }
  }
}

export { User_GetAllLabelInfo }
