// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_UpdateUserInfo
  * @param  {Object} params
  * @return {Network}
  */
class User_UpdateUserInfo extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.updateUserInfo',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *},
      *OPTIONAL: {
      *  "gender": "string",
      *  "nick": "string",
      *  "headImgUrl": "string",
      *  "userFaceImgUrl": "string",
      *  "birthday": "string",
      *  "userLable": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *}
      */
    }
  }
}

export { User_UpdateUserInfo }
