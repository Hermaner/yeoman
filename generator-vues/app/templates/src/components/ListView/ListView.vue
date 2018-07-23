<template>
  <div>
      <x-dialog v-model="isShow" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
        </div>
        <div>
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
</template>

<script>
import { XDialog } from 'vux'
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    XDialog
  },
  props: {
  },
  mounted () {
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less">
</style>
