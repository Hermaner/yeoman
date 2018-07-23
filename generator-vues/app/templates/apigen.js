
var _ = require('./autogen/scripts/underscore')
var request = require('request')
var Mustache = require('./autogen/scripts/mustache')
var FS = require('fs')

var ROOT_PATH = 'autogen/'
var API_PATH = 'src/api/'
var SECURITY_LEVEL = ['UserLogin', 'RegisteredDevice', 'None']
var SECURITY_TYPE = {
  'UserLogin': 'SecurityType.UserLogin',
  'RegisteredDevice': 'SecurityType.RegisteredDevice',
  'None': 'SecurityType.None'
}

var API_MUSTACHE = ROOT_PATH + 'mustache/api.mustache'

var SOURCE = [
  {
    name: 'haitao',
    src: 'http://10.32.166.8/info.api?json',
    filename: 'haitao.json',
    filterGroup: ['user', 'product', 'order', 'shopcart', 'minicart', 'coupon', 'store', 'wowProduct', 'wowActivity', 'recommend'],
    fileFilter: [
      'User_DeviceRegister',
      'User_RenewToken',
      'User_GetUserInfo',
      'User_RecordUserInfo',
      'User_AppLogin',
      'User_FindMyCollectedGoodsList', // 查询收藏商品和店铺
      'User_CancelCollectedGoods', // 删除收藏店铺或商品
      'User_CollectingGoods', // 收藏商品|店铺
      'User_IsCollectedGoods',
      'User_PartnerAppLogin',
      'User_PartnerAppBind',
      'User_DownSmsCode',
      'User_GetAllLabelInfo',
      'User_UpdateUserInfo',

      // 优惠券
      'Coupon_GetUserCouponList',
      'Coupon_GetMaxReduceValueMerCoupon',
      'Coupon_GetValidMerchantCoupon',
      'Coupon_GetValidStoreCoupon',
      'Coupon_ReceiveMerCoupon',
      'Coupon_ReceiveCoupon',
      'Coupon_GetValidMerchantCouponMerType',
      'Coupon_ReceiveStoreCoupon',
      'Coupon_GetMerchantBizType',
      'Coupon_ReceiveCoupon',
      'Coupon_ReceiveExCode',
      'Coupon_GetUserCouponNum',
      'Coupon_BatchGetMaxReduceMerCoupon',

      // 收货地址
      'User_GetRecAddressList',
      'User_CreateRecAddress',
      'User_UpdateRecAddress',
      'User_QueryByCredtNum',
      'User_GetRecAddressInfo',
      'User_DelRecAddress',
      'User_SetDefaultAddr',

      // 订单
      'Order_OrderRender',
      'Order_RequestPay',
      'Order_OrderPriceReCalculate',
      'Order_SubmitOrderForAllSys',
      'Order_CancelOrder',
      'Order_GetOrder',
      'Order_GetOrderList',
      'Order_QueryOrderStatusAmount',
      'Order_GetPayCompleteResult',
      'Order_ConfirmReceive',

      // recommend
      'Recommend_GetRecommendData',

      // 购物车
      'Shopcart_GetTotalCount',
      'Shopcart_AddItemsForCart',
      'Shopcart_RemoveItemsForCart',
      'Shopcart_RefreshCartByStore',
      'Shopcart_GetShopCartInfos',
      'Shopcart_UpdateItemNumForCart',
      'Shopcart_RefreshCart',

      // 店铺
      'Store_GetTargetNearbyMallInfo',
      'Store_QueryFloorNumberByMallId',
      'Store_QueryStoreByMallFloorNumber',
      'Store_QueryStoreBySeatId',
      'Store_QueryStoreDetail',
      'Store_QueryStoreBusinessTypeAll',
      'Store_QueryCurrentFloorBusinessType',
      'Store_QueryStoreSkuRecord',
      'Store_QueryHandPickStoreList',
      'Store_QuerySeatDetail',

      // 商品
      'WowProduct_GetSimpleItemInfoList',
      'WowProduct_GetItemInfo',
      'WowProduct_GetProductHotData',
      'WowProduct_QueryItemIdByBarcode',
      'WowProduct_GetSimpleItemActivityInfo',
      'WowProduct_GetPrices',
      'WowProduct_GetSkuInfo',

      // 活动类接口
      'WowActivity_GetItemActivityInfo',
      'WowActivity_GetSimpleActivityInfo'
    ]
  }
]

function createJSON (grunt, done) {
  var count = 0
  _.each(SOURCE, function (source, key, list) {
    var setting = {
      method: 'GET',
      url: source.src
    }
    request(setting, function (error, response, body) {
      count += 1
      if (error) {
        return console.log(error)
      } else {
        console.log('从服务端获得json索引文件:' + source.filename)
        var path = ROOT_PATH + '/source/'
        if (FS.existsSync(path)) {
          console.log('已经创建过此更新目录了')
        } else {
          FS.mkdirSync(path)
          console.log('更新目录已创建成功\n')
        }
        var jsonFile = FS.createWriteStream(path + source.filename, {
          flags: 'w',
          defaultEncoding: 'utf8'
        })
        jsonFile.write(body)
        jsonFile.end()
        if (count === SOURCE.length) {
          setTimeout(function () {
            createAPI()
          }, 1000)
        }
      }
    })
  })
}
function createAPI () {
  var apiTpl = FS.readFileSync(API_MUSTACHE, {
    encoding: 'utf8'
  })
  FS.readdir(ROOT_PATH + '/source/', function (ert, files) {
    _.each(files, function (file) {
      if (file === '.DS_Store') {
        return
      }
      console.log('开始解析索引文件:' + file)
      var data = FS.readFileSync(ROOT_PATH + '/source/' + file, {
        encoding: 'utf8'
      })
      var found = _.findWhere(SOURCE, {
        filename: file
      })
      // console.log('开始解析索引文件:' + data);
      var json = JSON.parse(data)
      for (var i in json.apiList) {
        var it = json.apiList[i]
        if (it.parameterInfoList) {
          var info = it.parameterInfoList
          if (_.isArray(info)) {
            for (var j = 0; j < info.length; j++) {
              if (j === info.length - 1) {
                info[j].last = true
              }
              if (info[j].type.toLowerCase().indexOf('api') > -1) {
                info[j].type = 'json'
              }
            }
          } else {
            if (info.type.toLowerCase().indexOf('api') > -1) {
              info.type = 'json'
            }
            info.last = true
          }
        }
        if (it.errorCodeList) {
          var error = it.errorCodeList
          if (_.isArray(error) && error.length > 0) {
            error[error.length - 1].last = true
          } else {
            error.last = true
          }
        }

        var array = it.methodName.split('.')

        if (array.length > 1) {
          var first = array[0]
          var second = array[1]
          it.className = first.substring(0, 1).toUpperCase() + first.substring(1, first.length) + '_' + second.substring(0, 1).toUpperCase() + second.substring(1, second.length)
        }
        if (found.fileFilter.indexOf(it.className) > -1 && found.filterGroup.indexOf(it.groupName) > -1 && SECURITY_LEVEL.indexOf(it.securityLevel) > -1) {
          it.securityType = SECURITY_TYPE[it.securityLevel]
          var fileContent = Mustache.render(apiTpl, it)

          var jsonFile = FS.createWriteStream(API_PATH + it.className + '.js', {
            flags: 'w',
            defaultEncoding: 'utf8'
          })
          jsonFile.write(fileContent)
          jsonFile.end()
        }
      }
    })
  })
}

/**
 * @description 从不同的source中获得所有的API接口
 */
function autogen () {
  createJSON()
}
autogen()
