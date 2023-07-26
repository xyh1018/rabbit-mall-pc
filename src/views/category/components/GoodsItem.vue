<template>
  <RouterLink class="goods-item" to="">
    <img :src="item.picture" alt="">
    <p class="name ellipsis">{{ item.name }}</p>
    <p class="desc ellipsis">{{ item.desc }}</p>
    <p class="price">{{ item.price }}</p>
  </RouterLink>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  setup () {

  }
}
</script>

<style scoped lang="less">
.goods-item {
  padding: 20px 30px;
  transition: all .3s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, .2);
  }

  img {
    width: 160px;
    height: 160px;
  }

  .name {
    font-size: 16px;
    width: 160px;
    padding-top: 10px;
    text-align: center;
  }

  .desc {
    font-size: 14px;
    color: #999999;
    width: 160px;
    padding-top: 10px;
    text-align: center;
  }

  .price {
    font-size: 20px;
    color: #cf4444;
    padding-top: 10px;
    text-align: center;
  }
}
</style>
