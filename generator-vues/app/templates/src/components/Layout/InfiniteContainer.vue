<template>
  <div class="InfiniteContainer">
    <slot></slot>
    <infinite-loading  spinner="circles" @infinite="infinite">
			<span slot="no-more">
	      数组全部加载完毕
	    </span>
			<span slot="no-results">
	      没有相关数据
	    </span>
		</infinite-loading>
  </div>
</template>

<script>

import InfiniteLoading from 'vue-infinite-loading'

export default {
  data () {
    return {
    }
  },
  components: {
    InfiniteLoading
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
    infinite ($state) {
      this.$emit('infinite', $state)
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/css/variables.scss';
  // @import '~@/assets/css/mixin.scss';
</style>
