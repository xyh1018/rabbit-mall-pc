<!--轮播图组件-->
<template>
  <div class="xtx-carousel">
    <ul class="carousel-body">
      <li v-for="(item, index) in bannerList" :key="index" class="carousel-item"
          :class="{fade: index === imgIndex}">
        <RouterLink to="/">
          <img
            :src="item.imgUrl"
            alt="">
        </RouterLink>
      </li>
    </ul>
    <a href="#" @click="toggle(-1)" class="carousel-btn prev"><i class="iconfont icon-left"></i></a>
    <a href="#" @click="toggle(1)" class="carousel-btn next"><i class="iconfont icon-right"></i></a>
    <div class="carousel-indicator">
      <span @click="circle(index)" v-for="(i, index) in bannerList" :key="index"
            :class="{active: index === imgIndex}"></span>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from 'vue'

export default {
  props: {
    // 轮播图数组
    bannerList: {
      type: Array,
      default: null
    },
    // 是否自动切图
    auto: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const imgIndex = ref(0)
    let timer = null
    const autoPlay = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        imgIndex.value++
        if (imgIndex.value >= props.bannerList.length) {
          imgIndex.value = 0
        }
      }, 3000)
    }
    // 监听bannerList数据的变化,如果bannerList长度大于0且auto为true,则调用autoPlay函数
    watch(() => props.bannerList, (newValue) => {
      if (newValue.length && props.auto) {
        autoPlay()
      }
    })
    // 鼠标进入暂停banner
    const stop = () => {
      if (timer) {
        clearInterval(timer)
      }
    }
    const play = () => {
      if (props.bannerList.length && props.auto) {
        autoPlay()
      }
    }
    // 点击按钮切换
    const toggle = (step) => {
      const index = imgIndex.value + step
      if (index > props.bannerList.length - 1) {
        imgIndex.value = 0
        return
      }
      if (index < 0) {
        imgIndex.value = props.bannerList.length - 1
        return
      }
      imgIndex.value = index
    }
    // 点击小圆点切换
    const circle = (index) => {
      imgIndex.value = index
    }
    onMounted(() => {
      const xtx = document.querySelector('.xtx-carousel')
      xtx.addEventListener('mouseenter', () => {
        stop()
      })
      xtx.addEventListener('mouseleave', () => {
        play()
      })
    })
    onUnmounted(() => {
      clearInterval(timer)
    })
    return {
      imgIndex,
      toggle,
      circle
    }
  }
}
</script>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
