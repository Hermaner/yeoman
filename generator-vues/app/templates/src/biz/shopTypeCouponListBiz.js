import { Coupon_GetValidMerchantCouponMerType } from '../api/Coupon_GetValidMerchantCouponMerType.js' // 查询店铺分类券
import { Coupon_GetMerchantBizType } from '../api/Coupon_GetMerchantBizType.js' // 获取领券类目
import { Coupon_ReceiveCoupon } from '../api/Coupon_ReceiveCoupon.js' // 领券
import NetworkAccessor from '../assets/js/common/NetworkAccessor.js'

const shopCouponList = {
  // 查询分类优惠券列表
  getCouponList (params) {
    const network = new Coupon_GetValidMerchantCouponMerType(params)
    return NetworkAccessor.sendRequest(network)
  },
  // 获取领券类目
  getCouponType (params) {
    const network = new Coupon_GetMerchantBizType(params)
    return NetworkAccessor.sendRequest(network)
  },
  // 领全场券
  getCouponAllSingle (params) {
    const network = new Coupon_ReceiveCoupon(params)
    return NetworkAccessor.sendRequest(network)
  }

}
export default shopCouponList
