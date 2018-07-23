<!-- 种类单个 组件 -->

<template>
    <div class="upLoadFile flex-wrp">
      <div class="upimgDiv" v-for="(file, index) in files" :key="file.id">
        <img @click="showImg(file.imgUrl)" :src="file.imgUrl"/>
        <div @click="deleteUpImg(index)"><i class="icon iconfont">&#xe603;</i></div>
      </div>
      <file-upload
        ref="upload"
        v-if="show"
        v-model="files"
        :thread="1"
        :multiple="true"
        @input="updatetValue"
        @input-filter="inputFilter"
        @input-file="inputFile"
        :data="systemParam"
        accept="image/*"
        :post-action="Uploadurl">
        <img :src="require('./addAc.png')" class="uploadDimg"/>
      </file-upload>
    </div>
</template>

<script>
import { systemParam, Uploadurl } from '@/api/index.js'
import FileUpload from 'vue-upload-component/src'
import ImageCompressor from '@xkeshi/image-compressor'
import { Indicator } from 'mint-ui'

export default {
  components: {
    FileUpload
  },
  data () {
    return {
      files: this.images || [],
      autoCompress: 1000 * 1000,
      systemParam: {},
      Uploadurl: ''
    }
  },
  props: {
    limit: {
      type: Number,
      default () {
        return 10
      }
    },
    images: {
      type: Array
    },
    clear: {
      type: Boolean
    },
    show: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  watch: {},
  methods: {
    inputFilter (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // 添加文件前
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
        if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress < newFile.size) {
          newFile.error = 'compressing'
          const imageCompressor = new ImageCompressor()
          imageCompressor.compress(newFile.file, {
            quality: 0.6,
            width: 600
          }).then((file) => {
            this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type })
          })
        }
      }
      Indicator.open()
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // 创建 blob 字段
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // 缩略图
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
    },
    updatetValue () {
    },
    inputFile (newFile, oldFile) {
      if (newFile && oldFile && newFile.success && !oldFile.success) {
        console.log('成功')
        Indicator.close()
        console.log(JSON.parse(newFile.xhr.response))
        const imgUrl = JSON.parse(newFile.xhr.response).data.imgUrl
        for (let i = 0; i < this.files.length; i += 1) {
          if (!this.files[i].imgUrl) {
            this.$set(this.files[i], 'imgUrl', imgUrl)
            break
          }
        }
        if (this.files.length > this.limit) {
          this.files.length = this.limit
        }
        console.log(this.files)
        this.$emit('getFiles', this.files.map(item => item.imgUrl))
      }
      if (newFile && oldFile) {
        if (newFile.active && !oldFile.active) {
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: 'size' })
          }
        }
        if (newFile.progress !== oldFile.progress) {
        }

        if (newFile.error && !oldFile.error) {
          // error
        }

        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
        }
      }
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        this.$refs.upload.active = true
      }
    },
    deleteUpImg (index) {
      this.files.splice(index, 1)
      let newfiles = this.files.map(item => item.imgUrl)
      this.$emit('getFiles', newfiles)
    },
    saveAudit () {
      this.$refs.upload.active = true
    }
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {
    this.systemParam = systemParam()
    this.Uploadurl = Uploadurl('UploadAppImgService')
  },
  destroyed () {}
}
</script>

<style lang="scss">
.upLoadFile{
  flex-wrap:wrap;
  .uploadDimg{
    width:120px;height:120px;display:block;margin:10px 0px 10px 10px
  }
  .upimgDiv{
    position:relative;
    margin:10px 0px 10px 10px;
    width:120px;height:120px;float:left;
    border:1px solid #ddd;border-radius:4px;
    img{
      width:100%;height:100%;display:block;
    }
    div{
      position:absolute;right:0;top:0;
      z-index:2;background:rgba(0,0,0,.4);width:20px;height:20px;color:#fff;font-size:18px;text-align:Center;line-height:18px;
    }
  }
  .mint-popup-right{
    left:0;right:0;bottom:0;top:0;transform: translate3d(0, 0, 0);background:rgba(0,0,0,0.7)
  }
  .popImgCon{
    position:fixed;left:0;top:0;right:0;bottom:0;
  }
  .popImg{
    display:block;width:100%;
  }
}


</style>
