<template>
	<div class="">
		<Tabs
			:tabs="tabs"
			itemKey="label"
			@tabChange="tabChange"
		/>
		<PullView
			@refresh="refresh"
			@loadmore="loadmore"
			:noMore="noMore"
			:top='45'
		>
			<x-button  v-for="(item, index) in counts" :key="index" type="primary" @click.native="$route.navigateTo('../shop/couponList.html')">{{index}}</x-button>
		</PullView>
	</div>
</template>

<script>

import 'assets/js/main'
import { mapState, mapActions } from 'vuex'
// import { Toast, Indicator } from 'mint-ui'
import {
	PullView
} from 'components/Layout'
import Tabs from 'components/Tabs/Tabs'
import CouponItem from 'components/ListItem/CouponItem'
import { XButton } from 'vux'
export default {
  data () {
    return {
    }
  },
  components: {
    Tabs,
    PullView,
    XButton,
    CouponItem
  },
  computed: {
    ...mapState([
      'tabs',
      'noMore',
		  'counts'
    ])
  },
  mounted () {
    this.refresh()
  },
  methods: {
    ...mapActions([
      'refresh',
      'loadmore'
    ]),
    tabChange (index) {
      this.refresh()
    }
  }
}
</script>

<style lang="scss">
</style>
