<template>
  <div>
      <x-dialog v-model="isShow" class="dialog-demo" hide-on-blur>
        <slot>
        </slot>
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
