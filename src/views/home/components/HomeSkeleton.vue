<template>
  <div class='home-skeleton'>
    <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor:background}">
      <XtxSkeleton class="item-c" background="#e4e4e4" width="305px" height="306px" margin="0 0 15px 0" animated/>
      <XtxSkeleton class="item-c" background="#e4e4e4" width="160px" height="24px" margin="0 0 15px 0" animated/>
      <XtxSkeleton class="item-c" background="#e4e4e4" width="120px" height="24px" animated/>
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
    }
  }
}
</script>

<style scoped lang="less">
.home-skeleton {
  width: 1240px;
  height: 406px;
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
