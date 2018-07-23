<template>
  <div class="container">
    <Header />
    <div class="contenter">
      <slot></slot>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  },
  props: {
    label: {
      type: String
    }
  },
  mounted () {
  },
  // 相关操作事件
  methods: {
  }
}
</script>

<style lang="scss">
</style>
