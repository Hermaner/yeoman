// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_AppLogin
  * @param  {Object} params
  * @return {Network}
  */
class User_AppLogin extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.appLogin',
      SECURITY_TYPE: SecurityType.RegisteredDevice
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "accountId": "string",
      *  "type": "string",
      *  "password": "string",
      *},
      *OPTIONAL: {
      *  "vfCode": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000010": "未找到用户",
      *  "1000030": "用户名or密码错误",
      *  "1000100": "图片验证码错误",
      *  "1000110": "账户尚未激活",
      *  "1000300": "用户名或密码错误已达3次",
      *  "1000340": "用户账户还没有密码",
      *  "1000480": "用户账户被冻结，不允许登录"
      *}
      */
    }
  }
}

export { User_AppLogin }
