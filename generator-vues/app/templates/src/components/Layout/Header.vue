<template>
  <div class="Footer">
    <div class="ws-foot am-container">
        <div class="am-cf ws-foot-list">
            <a href="../about/about.html" target="_blank" class="am-fl ws-foot-item">关于我们</a>
            <a href="../about/contact.html" target="_blank" class="am-fl ws-foot-item">联系我们</a>
            <a href="../about/join.html" target="_blank" class="am-fl ws-foot-item">加入我们</a>
            <a href="../about/agreement.html" target="_blank" class="am-fl ws-foot-item">用户协议</a>
            <a href="../about/friendLink.html" target="_blank" class="am-fl ws-foot-item">友情链接</a>
        </div>
        <div class="ws-foot-copyright ws-foot-copyright1">
            copyright@2017-2018 牛膜网 <a target="_blank" href="http://www.miitbeian.gov.cn">沪ICP备17055667号</a><br/>
            版权声明
上海易瓴信息技术有限公司对其发行的或与合作伙伴共同发行的作品享有版权，受版权法的保护。
对于上述版权内容，超越合理使用范畴、并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。
        </div>
    </div>
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
    label: {
      type: String
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/variables.scss';
// @import '~@/assets/css/mixin.scss';
.Footer{
  padding-top: 40px;
  background: #fafafa;
  margin-top: 20px;
  min-width:1200px;
  clear: both;
  .ws-foot {
    width: 1200px;
    min-width: 1200px;
    padding: 0;
    margin: 0 auto;
  }
  .ws-foot .ws-foot-list {
    margin: 0 auto;
    display: table;
    a{
      color:#787878;
      font-size: 14px;
      &:hover{
        color:$Mcolor;
      }
    }
  }
  .ws-foot .ws-foot-item {
    padding: 0 20px;
    position: relative;
    font-size: 14px;
    color: #787878;
  }
  .ws-foot .ws-foot-copyright {
    text-align: center;
    font-size: 14px;
    color: #787878;
    padding: 20px 0 40px;
    a{
      color:#787878;
    }
    a:hover{
      color:$Mcolor
    }
  }
  .ws-foot .ws-foot-copyrightA {
    color: #787878;
    padding: 0 5px;
  }
  img{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
    border: 0;
  }
}
@media screen and (max-width: 800px) {
  .Footer{
    padding-top: 20px;
    background: #fafafa;
    margin-top: 10px;
    min-width: 0;
    .ws-foot {
      width: auto;
      min-width: auto;
      padding: 0;
      margin: 0;
    }
    .ws-foot .ws-foot-list {
      margin: 0;
      display: block;
      text-align: center;
    }
    .ws-foot .ws-foot-item {
      padding: 0 5px;
      font-size: 14px;
      color: #787878;
    }
    .ws-foot .ws-foot-copyright {
      text-align: center;
      font-size: 14px;
      color: #787878;
      padding: 10px;
    }
    .ws-foot .ws-foot-copyrightA {
      color: #787878;
      padding: 0 5px;
    }
    img{
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      vertical-align: middle;
      border: 0;
    }
  }
}
</style>
