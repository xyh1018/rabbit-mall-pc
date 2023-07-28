<template>
  <div class="xtx-infinite-loading" ref="target">
    <div v-if="loading" class="loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div v-if="finished" class="none">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  name: 'XtxInfiniteLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const target = ref(null)
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
      // .xtx-infinite-loading进入可视区域进行数据加载判断
      if (isIntersecting) {
        // 如果不处于加载状态且没有加载完所有数据,则触发infinite事件,来获取数据
        if (!props.loading && !props.finished) {
          emit('infinite')
        }
      }
    }, {
      threshold: 0
    })
    return {
      target
    }
  }
}
</script>

<style scoped lang="less">
.xtx-infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    .img {
      width: 50px;
      height: 50px;
      background: url(../../assets/images/load.gif) no-repeat center / contain;
    }

    .text {
      color: #999;
      font-size: 16px;
    }
  }

  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    .img {
      width: 200px;
      height: 134px;
      background: url(../../assets/images/none.png) no-repeat center / contain;
    }

    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
