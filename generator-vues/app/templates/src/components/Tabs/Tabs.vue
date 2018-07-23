<template>
  <tab
    custom-bar-width="60px"
  >
    <tab-item
      badge-background="#ff0000"
      badge-color="#fff"
      :badge-label="item.count | badge"
      v-for="(item, index) in tabs"
      :key="index"
      :selected="index==tabIndex"
      @on-item-click="tabChange"
    >
      {{item[itemKey]}}
    </tab-item>
  </tab>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  components: {
    Tab,
    TabItem
  },
  props: {
    tabs: {
      type: Array
    },
    itemKey: String
  },
  mounted () {
  },
  methods: {
    tabChange (index) {
      this.tabIndex = index
      this.$emit('tabChange', index)
    }
  }
}
</script>

<style lang="less">
</style>
