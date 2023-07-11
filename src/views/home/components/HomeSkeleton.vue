<template>
  <div class='home-skeleton' :style="'height:' + height +'px'">
    <div class="item" v-for="i in num" :key="i" :style="{backgroundColor:background}">
      <XtxSkeleton class="item-c" background="#e4e4e4" :width="width + 'px'" height="306px"
                   animated/>
      <XtxSkeleton v-show="show" class="item-c" background="#e4e4e4" width="160px" height="24px" margin="15px 0 15px 0"
                   animated/>
      <XtxSkeleton v-show="show" class="item-c" background="#e4e4e4" width="120px" height="24px" animated/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSkeleton',
  props: {
    background: {
      type: String,
      default: '#fff'
    },
    num: {
      type: Number,
      default: 4
    },
    width: {
      type: Number,
      default: 305
    },
    show: {
      type: Boolean,
      default: true
    },
    height: {
      type: Number,
      default: 405
    }
  }
}
</script>

<style scoped lang="less">
.home-skeleton {
  width: 1240px;
  display: flex;
  justify-content: space-between;

  .item {
    width: 306px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
