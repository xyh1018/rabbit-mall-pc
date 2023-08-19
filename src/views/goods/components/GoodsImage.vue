<template>
  <div class="goods-image">
    <!--图片放大容器-->
    <div v-show="show" class="large" :style="[{backgroundImage:`url(${images[currentIndex]})`},largePosition]"></div>
    <!--大图容器-->
    <div ref="target" class="middle">
      <img :src="images[currentIndex]" alt="">
      <div v-show="show" class="layer" :style="layerPosition"></div>
    </div>
    <!--小图容器-->
    <ul class="small">
      <li v-for="(item, index) in images" :key="index" :class="{active: index===currentIndex}">
        <img @mouseenter="currentIndex = index" :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const currentIndex = ref(0)
    const target = ref(null)
    // 是否显示遮罩层和大图
    const show = ref(false)
    // 遮罩的坐标
    const layerPosition = reactive({
      left: '',
      top: ''
    })
    // 大图的背景定位
    const largePosition = reactive({
      backgroundPositionX: '',
      backgroundPositionY: ''
    })
    // elementX 鼠标相对于target容器的x轴坐标
    // isOutside 鼠标是否在容器外
    const {
      elementX,
      elementY,
      isOutside
    } = useMouseInElement(target)
    watch([elementX, elementY, isOutside], () => {
      show.value = !isOutside.value
      const position = {
        x: 0,
        y: 0
      }
      if (elementX.value < 100) {
        position.x = 0
      } else if (elementX.value > 300) {
        position.x = 200
      } else {
        position.x = elementX.value - 100
      }
      if (elementY.value < 100) {
        position.y = 0
      } else if (elementY.value > 300) {
        position.y = 200
      } else {
        position.y = elementY.value - 100
      }
      layerPosition.left = position.x + 'px'
      layerPosition.top = position.y + 'px'
      largePosition.backgroundPositionX = -2 * position.x + 'px'
      largePosition.backgroundPositionY = -2 * position.y + 'px'
    })
    return {
      currentIndex,
      target,
      show,
      layerPosition,
      largePosition
    }
  }
}
</script>

<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;

    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, .2);
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover, &.active {
        border: 2px solid @MainGreenColor;
      }
    }
  }
}
</style>
