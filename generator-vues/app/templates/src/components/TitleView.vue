<template>
  <div class="TitleView">
    {{text}}
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
    text: {
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
@import '~@/variables.scss';
.TitleView{
  height: 50px;line-height:50px;border-bottom:1px solid #eee;font-size:18px;color:#333;padding-left:20px;background:#fff;
  position:relative;box-sizing: border-box;background-color: #c8e5ff;
  &:before{
    display:block;
    height:20px;width:3px;background:$mColor;
    position:absolute;
    content: '';
    left:10px;top:15px;
  }
}
</style>
