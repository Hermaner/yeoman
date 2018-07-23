export const APP_ID = 3
export const COOKIE_USER_INFO_KEY = APP_ID + '_uinfo'
export const STORE_ID = APP_ID + '_storeId'
export const STORE_INFO = APP_ID + '_storeInfo'
export const ALL_STORE_LIST = APP_ID + '_storeList'
export const USER_ALL_LABELS_KEY = APP_ID + '_userLabels'
export const BRAND_OPTIONS_KEY = APP_ID + '_brandOptions'
export const CATEGORY_OPTIONS_KEY = APP_ID + '_categoryOptions'
export const UNIT_OPTIONS_KEY = APP_ID + '_unitOptions'
export const NATION_OPTIONS_KEY = APP_ID + '_nationOptions'

export const ORDER_STATUS = {
  SUBMITED: '已提交',
  AUDITING: '待审核',
  WAIT_SHIPPING: '待发货',
  SHIPPING: '发货中',
  CONSIGNED: '已发货',
  RECEIPTED: '已签收',
  COMPLETED: '已完成'
}

export const DELIVERY_MODE = {
  SELF_SHOPPING: '用户自取'
}

export const PAY_TYPE = {
  alipay_intl: '支付宝内卡支付'
}

export const REFUND_TYPE = {
  alipay_intl: '支付宝'
}

export const WITHDRAW_STATUS = {
  WAIT_AUTH: '待审核'
}
