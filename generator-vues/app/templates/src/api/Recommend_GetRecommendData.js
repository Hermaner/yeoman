// Auto Generated.  DO NOT EDIT!

import {Network} from '../assets/js/common/Network'
import SecurityType from '../assets/js/common/SecurityType'
/**
  * @class Recommend_GetRecommendData
  * @param  {Object} params
  * @return {Network}
  */
class Recommend_GetRecommendData extends Network {
  constructor (params) {
    super(params)
    this.api = {
      METHOD_NAME: 'recommend.getRecommendData',
      SECURITY_TYPE: SecurityType.None
      /**
      *小程序节约控件屏蔽掉无用字段
      *REQUIRED: {
      *},
      *OPTIONAL: {
      *  "marketId": "long"
      *},
      *VERIFY:{
      *},
      *ERROR_CODE: {
      *  "1000010": "服务器内部异常",
      *  "1000020": "参数错误"
      *}
      */
    }
  }
}

export { Recommend_GetRecommendData }
