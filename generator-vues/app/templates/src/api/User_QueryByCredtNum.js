// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_QueryByCredtNum
  * @param  {Object} params
  * @return {Network}
  */
class User_QueryByCredtNum extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.queryByCredtNum',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "type": "string",
      *  "credtNum": "string"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000280": "身份证号码错误"
      *}
      */
    }
  }
}

export { User_QueryByCredtNum }
