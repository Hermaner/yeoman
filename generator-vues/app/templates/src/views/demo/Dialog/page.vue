<template>
	<div class="">
		<Dialog ref="dialog">
			<div>dialog</div>
			<img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
		</Dialog>
		<x-button  type="primary" @click.native="showDialog">showDialog</x-button>
	</div>
</template>

<script>

import 'assets/js/main'
import Dialog from 'components/Dialog/Dialog'
import { XButton } from 'vux'
export default {
  data () {
    return {
    }
  },
  components: { Dialog, XButton },
  computed: {
  },
  mounted () {
  },
  methods: {
    showDialog () {
      this.$refs.dialog.show()
    }
  }
}
</script>

<style lang="scss">
</style>
