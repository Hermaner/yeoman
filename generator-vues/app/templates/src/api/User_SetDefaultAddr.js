// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_SetDefaultAddr
  * @param  {Object} params
  * @return {Network}
  */
class User_SetDefaultAddr extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.setDefaultAddr',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "addrId": "long"
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

export { User_SetDefaultAddr }
