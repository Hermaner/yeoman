<template>
	<PullView @refresh="refresh"  @loadmore="loadmore">
		<x-button  v-for="(item, index) in counts" :key="index" type="primary" @click.native="$route.navigateTo('../shop/couponList.html')">{{index}}</x-button>
	</PullView>
</template>

<script>

import 'assets/js/main'
import { mapState, mapActions } from 'vuex'
// import { Toast, Indicator } from 'mint-ui'
import { Container, PullView } from 'components/Layout'
import { XButton } from 'vux'
export default {
  data () {
    return {
      counts: 15
    }
  },
  components: {
    Container,
    XButton,
    PullView
  },
  computed: {
	  ...mapState([
		 'nickName'
  ])
  },
  mounted () {},
  methods: {
	  ...mapActions([
  	'goPage'
  ]),
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
