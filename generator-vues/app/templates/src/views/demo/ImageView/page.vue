<template>
	<div class="">
		<!-- <img class="previewer-demo-img" style="margin: 40px" v-for="(item, index) in list" :src="item.src" width="100" @click="$refs.ImageLook.show(index)"> -->
		<BaseImage
			class="previewer-demo-img"
			style="margin: 40px;width:100px;height:100px;"
			v-for="(item, index) in list"
			:key="index"
			:src="item.src"
			@click.native="$refs.ImageLook.show(index)"
		/>
		<ImageLook
			ref="ImageLook"
			className="previewer-demo-img"
			:list="list"
		/>
	</div>
</template>

<script>

import 'assets/js/main'
import { mapState } from 'vuex'
import BaseImage from 'components/ImageView/BaseImage'
import ImageLook from 'components/ImageView/ImageLook'
export default {
  data () {
    return {
    }
  },
  components: { ImageLook, BaseImage },
  computed: {
    ...mapState([
      'list'
    ])
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
