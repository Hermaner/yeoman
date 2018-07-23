// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_RecordUserInfo
  * @param  {Object} params
  * @return {Network}
  */
class User_RecordUserInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.recordUserInfo',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "nickname": "string",
      *  "headImgUrl": "string",
      *},
      *OPTIONAL: {
      *  "gender": "string",
      *  "cellphone": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000080": "服务端错误"
      *}
      */
    }
  }
}

export { User_RecordUserInfo }
