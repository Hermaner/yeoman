<template>
  <div v-transfer-dom>
    <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
  </div>
</template>

<script>
import { Previewer, TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  props: {
    className: String,
    list: Array
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      console.log(index)
      this.$refs.previewer.show(index)
    }
  },
  data () {
    const className = `.${this.className}`
    return {
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll(className)[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  }
}
</script>
