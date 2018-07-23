// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class User_CollectingGoods
  * @param  {Object} params
  * @return {Network}
  */
class User_CollectingGoods extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'user.collectingGoods',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "valueId": "long",
      *  "userCollectType": "string"
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000680": "重复收藏商品"
      *}
      */
    }
  }
}

export { User_CollectingGoods }
