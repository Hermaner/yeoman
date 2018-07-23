<template>
  <div class="CouponItem">
    <img src="../../assets/img/shopcouponbg.png"  class="coupon-bg" />
    <div class="couponBox flex-wrp">
      <img :src="item.merchantIcon | imageFormat(180, 180)"  class="couponLogo" />
      <div class="mid flex-item flex-wrp flexColumn">
        <div>
          <div class="name">{{item.title}}</div>
          <div class="label">位置：{{item.merchantAddr}}</div>
        </div>
        <div class="amount"><span>{{item.reduceCost | currency }}</span>元优惠券</div>
      </div>
      <div class="btn flex-wrp acenter">
        立即使用
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    item: {
      type: Object
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
// @import '~@/assets/css/mixin.less';
// @import '~@/assets/css/variables.scss';
.CouponItem {
  overflow: hidden;
  margin: 15px;
  height: 100px;
  position: relative;
  background-color: #fff;
  .coupon-bg {
    width: 100%;
    height: 100%;
  }
  .couponBox{
    position: absolute;
    left:10px;
    top:10px;
    bottom:10px;
    right: 10px;
    z-index:2;
    .couponLogo{
      height: 80px;
      width: 80px;
      border-radius: 4px;
      margin-right: 10px;
    }
    .mid{
      justify-content: space-between;
      .name{
        font-size: 14px;
        color: #333;
        line-height: 20px;
        margin-bottom: 5px;
        .ellipsis(2);
      }
      .label{
        font-size: 12px;
        color:#888;
      }
      .amount{
        color:@tab-bar-active-color;
        font-size: 12px;
        span{
          font-family: Verdana-Bold;
          font-size: 22px;
          padding-right:6px;
        }
      }
    }
    .btn{
      width: 40px;
      line-height: 22px;
      font-size: 15px;
      color:#333;
    }
  }
}
</style>
