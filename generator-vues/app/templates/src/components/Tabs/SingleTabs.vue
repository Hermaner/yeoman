<template>
  <div class="tabs flex-wrp">
    <div class="tab" :class="{cur: tabIndex == index}" v-for="(item, index) in items" @click="typeChange(index)" :key="index">{{item[itemKey]}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    tabIndex: Number,
    items: {
      type: Array
    },
    itemKey: String
  },
  mounted () {
  },
  methods: {
    typeChange (index) {
      this.$emit('typeChange', index)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/variables.scss';
// @import '~@/assets/css/mixin.scss';
.tabs{
	height: 45px;
	background-color: #fff;
	.tab{
		padding:0 10px;
		height:45px;
		margin:0 10px;
		line-height: 45px;
		font-size: 14px;
		color:#333;
		box-sizing: border-box;
		&.cur{
			border-bottom: 2px solid $Mcolor;
		}
	}
}
</style>
