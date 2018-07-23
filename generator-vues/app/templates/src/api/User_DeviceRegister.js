// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_DeviceRegister
  * @param  {Object} params
  * @return {Network}
  */
class User_DeviceRegister extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.deviceRegister',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *},
      *OPTIONAL: {
      *  "deviceInfo": "string",
      *  "ua": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *}
      */
    }
  }
}

export { User_DeviceRegister }
