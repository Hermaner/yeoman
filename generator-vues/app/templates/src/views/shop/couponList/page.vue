<template>
	<div class="couponList">
		<SingleTabs
			:tabIndex="tabIndex"
			:items="typeList"
			itemKey="typeName"
			@typeChange="typeChange"
		/>
		<swiper :height="swiperHeight" @on-index-change="typeChange" v-if="typeList.length > 0" v-model="tabIndex" :show-dots="false">
			<swiper-item v-for="(list, index) in typeList" :key="index">
				<PullView @refresh="refresh"  @loadmore="loadmore">
					<CouponItem :item="item" v-for="(item, i) in list.items" :key="i" />
				</PullView>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>

import 'assets/js/main'
import { mapState, mapMutations, mapActions } from 'vuex'
// import { Toast, Indicator } from 'mint-ui'
import {
	PullView
} from 'components/Layout'
import SingleTabs from 'components/Tabs/SingleTabs'
import CouponItem from 'components/ListItem/CouponItem'
import { Swiper, SwiperItem, querystring } from 'vux'
export default {
  data () {
    return {
      tabIndex: 0,
      swiperHeight: `${window.innerHeight - 45}px`
    }
  },
  components: {
    Swiper,
    SwiperItem,
    PullView,
    CouponItem,
    SingleTabs
  },
  computed: {
    ...mapState([
      'typeList',
      'count'
    ])
  },
  mounted () {
		// this.resetState()
    console.log(querystring.parse())
    this.getCouponType()
  },
  methods: {
    ...mapMutations([
      'resetState'
    ]),
    ...mapActions([
      'getCouponType',
      'getCouponData'
    ]),
    typeChange (index) {
      const { tabIndex, typeList } = this
      if (index === tabIndex) {
        return
      }
      this.tabIndex = index
      if (typeList[index].items.length > 0) {
        return
      }
      this.getCouponData({ index, typeList })
    },
    refresh (loaded) {
      setTimeout(() => {
        this.counts = 15
        loaded('done')
      }, 1000)
    },
    loadmore (loaded) {
      setTimeout(() => {
        this.counts += 15
        loaded('done')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
</style>
