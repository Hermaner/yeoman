// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Store_QueryStoreBusinessTypeAll
  * @param  {Object} params
  * @return {Network}
  */
class Store_QueryStoreBusinessTypeAll extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'store.queryStoreBusinessTypeAll',
      SECURITY_TYPE: SecurityType.UserLogin
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *},
      *OPTIONAL: {
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "3000007": "参数非法",
      *  "3000008": "系统未知异常"
      *}
      */
    }
  }
}

export { Store_QueryStoreBusinessTypeAll }
