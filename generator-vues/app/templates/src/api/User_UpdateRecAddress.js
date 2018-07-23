// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_UpdateRecAddress
  * @param  {Object} params
  * @return {Network}
  */
class User_UpdateRecAddress extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.updateRecAddress',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "addrId": "long",
      *},
      *OPTIONAL: {
      *  "nationName": "string",
      *  "provinceName": "string",
      *  "cityName": "string",
      *  "regionName": "string",
      *  "detail": "string",
      *  "zipCode": "string",
      *  "cellphone": "string",
      *  "recName": "string",
      *  "recId": "long",
      *  "type": "string",
      *  "credtNum": "string",
      *  "credtImgUrl1": "string",
      *  "credtImgUrl2": "string"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000230": "手机号错误，请输入正确的手机号",
      *  "1000280": "身份证号码错误",
      *  "1000332": "输入的邮编错误",
      *  "1000490": "海关发货需要实名制信息，请输入真实姓名"
      *}
      */
    }
  }
}

export { User_UpdateRecAddress }
