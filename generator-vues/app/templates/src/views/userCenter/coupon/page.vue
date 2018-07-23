<template>
	<div class="">
		<img class="previewer-demo-img" style="margin: 40px" v-for="(item, index) in list" :src="item.src" width="100" @click="$refs.ImageLook.show(index)">
		<ImageLook
			ref="ImageLook"
			className="previewer-demo-img"
			:list="list"
		/>
	</div>
</template>

<script>

import 'assets/js/main'
import { mapState, mapMutations, mapActions } from 'vuex'
import ImageLook from 'components/ImageView/ImageLook'
export default {
  data () {
    return {
      list: [{
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg'
      },
      {
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg'
      }, {
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
      }]
    }
  },
  components: {
    ImageLook
  },
  computed: {
    ...mapState([
      'typeList',
      'count'
    ])
  },
  mounted () {
  },
  methods: {
    ...mapMutations([
      'resetState'
    ]),
    ...mapActions([
      'getCouponType',
      'getCouponData'
    ])
  }
}
</script>

<style lang="scss">
</style>
