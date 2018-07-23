// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_DownSmsCode
  * @param  {Object} params
  * @return {Network}
  */
class User_DownSmsCode extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.downSmsCode',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "mobile": "string",
      *  "askType": "string",
      *},
      *OPTIONAL: {
      *  "vfCode": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000010": "未找到用户",
      *  "1000020": "账户已注册",
      *  "1000100": "图片验证码错误",
      *  "1000230": "手机号错误，请输入正确的手机号",
      *  "1000270": "短信请求太过频繁",
      *  "1000290": "短信请求太多"
      *}
      */
    }
  }
}

export { User_DownSmsCode }
