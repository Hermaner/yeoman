// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Store_QueryStoreSkuRecord
  * @param  {Object} params
  * @return {Network}
  */
class Store_QueryStoreSkuRecord extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'store.queryStoreSkuRecord',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *  "storeId": "string",
      *},
      *OPTIONAL: {
      *  "storeCategoryId": "string",
      *  "pageIndex": "int",
      *  "pageSize": "int"
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

export { Store_QueryStoreSkuRecord }
