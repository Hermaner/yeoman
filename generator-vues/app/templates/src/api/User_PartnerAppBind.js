// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_PartnerAppBind
  * @param  {Object} params
  * @return {Network}
  */
class User_PartnerAppBind extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.partnerAppBind',
      SECURITY_TYPE: SecurityType.RegisteredDevice
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "tempToken": "string",
      *  "type": "string",
      *  "accountId": "string",
      *},
      *OPTIONAL: {
      *  "smsCode": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000020": "账户已注册",
      *  "1000070": "参数错误",
      *  "1000240": "短信验证码错误",
      *  "1000250": "短信验证码已过期",
      *  "1000350": "验证临时token失败,请重新登录",
      *  "1000360": "第三方账户已绑定海淘账户",
      *  "1000380": "已经绑定了同类的第三方账户",
      *  "1000410": "需要短信验证码，请输入",
      *  "1000480": "用户账户被冻结，不允许登录"
      *}
      */
    }
  }
}

export { User_PartnerAppBind }
