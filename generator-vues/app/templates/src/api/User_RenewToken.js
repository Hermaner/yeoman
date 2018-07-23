// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_RenewToken
  * @param  {Object} params
  * @return {Network}
  */
class User_RenewToken extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.renewToken',
      SECURITY_TYPE: SecurityType.RegisteredDevice
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "token": "string"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000010": "未找到用户",
      *  "1000480": "用户账户被冻结，不允许登录"
      *}
      */
    }
  }
}

export { User_RenewToken }
