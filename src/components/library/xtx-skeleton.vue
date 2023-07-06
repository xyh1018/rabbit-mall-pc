<!--骨架组件-->
<template>
  <div class="xtx-skeleton" :style="{width,height,background,margin}" :class="{shan: animated}">
  </div>
</template>

<script>
export default {
  setup () {

  },
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    },
    animated: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: '#5e5e5e'
    },
    margin: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style scoped lang="less">
.xtx-skeleton {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.shan {
  &:after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%);
    transform: skewX(-45deg);
  }
}

@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
