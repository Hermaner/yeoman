<template>
	<div
		class="pullContainer"
		:style="{'top':top+'px','bottom':bottom+'px'}"
	>
		<pull-to
			:top-load-method="refresh"
			:bottom-load-method="loadmore"
			@top-state-change="stateChange"
			@bottom-state-change="stateChange"
			:top-config="topConfig"
			:bottom-config="bottomConfig"
			:is-bottom-bounce="!noMore"
		>
			<template slot="top-block" slot-scope="props">
	      <div class="top-load-wrapper">
	        <svg class="icon"
	             :class="{
	                'icon-arrow': props.state === 'trigger',
	                'icon-loading': props.state === 'loading'
	             }"
	             aria-hidden="true">
	          <use :xlink:href="iconLink"></use>
	        </svg>
	        {{ props.stateText }}
	      </div>
	    </template>
			<slot></slot>
			<div class="pullNoDate" v-if="noMore">数据全部加载完毕</div>
			<template slot="bottom-block" slot-scope="props">
      <div class="bottom-load-wrapper">
        <svg class="icon"
             :class="{
                'icon-arrow': props.state === 'trigger',
                'icon-loading': props.state === 'loading'
             }"
             aria-hidden="true">
          <use :xlink:href="iconLink"></use>
        </svg>
        {{ props.stateText }}
      </div>
    </template>
		</pull-to>
	</div>

</template>

<script>

import PullTo from 'vue-pull-to'
require('./pullIcon/iconfont')
export default {
  data () {
    return {
      topConfig: {
			  pullText: '下拉刷新数据',
			  triggerText: '释放更新数据',
			  loadingText: '加载中...',
			  doneText: '加载完成',
			  failText: '加载失败',
			  loadedStayTime: 0,
			  stayDistance: 50,
			  triggerDistance: 70
      },
      bottomConfig: {
			  pullText: '上拉加载数据',
			  triggerText: '释放更新数据',
			  loadingText: '加载中...',
			  doneText: '加载完成',
			  failText: '加载失败',
			  loadedStayTime: 0,
			  stayDistance: 50,
			  triggerDistance: 70
      },
      iconLink: ''
    }
  },
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    },
    noMore: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PullTo
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    refresh (loaded) {
      this.$emit('refresh', loaded)
    },
    loadmore (loaded) {
      this.$emit('loadmore', loaded)
    },
    stateChange (state) {
      if (state === 'pull' || state === 'trigger') {
        this.iconLink = '#icon-arrow-bottom'
      } else if (state === 'loading') {
        this.iconLink = '#icon-loading'
      } else if (state === 'loaded-done') {
        this.iconLink = '#icon-finish'
      }
    }
  }
}
</script>

<style lang="less">
.pullContainer{
	.absolute;
	overflow: hidden;
	.pullNoDate{
		text-align: center;
		line-height: 45px;
		color:#666;
		font-size: 14px;
	}
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.view-wrapper {
  box-sizing: border-box;
  padding-top: 50px;
  height: 100%;
  background: #f6f6f6;
}
.bottom-load-wrapper {
    line-height: 50px;
    text-align: center;
  }
	.top-load-wrapper {
    line-height: 50px;
    text-align: center;
  }
  .icon-arrow {
    transition: .2s;
    transform: rotate(180deg);
  }
  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>
