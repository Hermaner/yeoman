// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_PartnerAppLogin
  * @param  {Object} params
  * @return {Network}
  */
class User_PartnerAppLogin extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.partnerAppLogin',
      SECURITY_TYPE: SecurityType.RegisteredDevice
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "partnerId": "string",
      *  "authResp": "string",
      *},
      *OPTIONAL: {
      *  "rembFlag": "int",
      *  "encryptedData": "string",
      *  "iv": "string",
      *  "ptnAppId": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000320": "用户未授权",
      *  "1000370": "支付宝验签失败",
      *  "1000480": "用户账户被冻结，不允许登录"
      *}
      */
    }
  }
}

export { User_PartnerAppLogin }
