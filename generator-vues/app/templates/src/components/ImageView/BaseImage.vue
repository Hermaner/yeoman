<template>
  <div class="imgBase">
    <img class="defaultImg" :src="defaultImg" />
    <x-img
      :src="src"
      :webp-src="`${src}?type=webp`"
      @on-success="success"
      @on-error="error"
      class="ximg-demo"
      error-class="ximg-error"
      :offset="-100"
      container="#vux_view_box_body"
    />
  </div>
</template>

<script>
import { XImg } from 'vux'
export default {
  components: {
    XImg
  },
  props: {
    src: String
  },
  methods: {
    success (src, ele) {
      const span = ele.parentNode.querySelector('.defaultImg')
      ele.parentNode.removeChild(span)
    },
    error () {
      this.defaultImg = require('../../assets/img/nqbg.png')
    }
  },
  data () {
    return {
      defaultImg: require('../../assets/img/nod.png')
    }
  }
}
</script>

<style lang="scss">
.imgBase{
  width: 100%;
  height: 40px;
  .defaultImg{
    width: 100%;
    height: 100%;
    display: block;
  }
  .ximg-demo {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
