<template>
  <ul class="goods-sales">
    <li>
      <p>销量人气</p>
      <p>200+</p>
      <p>
        <span class="iconfont icon-qizi"></span>
        销量人气
      </p>
    </li>
    <li>
      <p>商品评价</p>
      <p>400+</p>
      <p>
        <span class="iconfont icon-pingjia"></span>
        查看评价
      </p>
    </li>
    <li>
      <p>收藏人气</p>
      <p>600+</p>
      <p>
        <span class="iconfont icon-shoucang"></span>
        收藏商品
      </p>
    </li>
    <li>
      <p>品牌信息</p>
      <p>苏宁电器</p>
      <p>
        <span class="iconfont icon-pinpai"></span>
        品牌主页
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style scoped lang="less">
.goods-sales {
  display: flex;
  width: 400px;
  height: 140px;
  align-items: center;
  //justify-content: center;

  li {
    flex: 1;
    text-align: center;
    position: relative;

    .iconfont {
      color: #27ba9b;
      font-size: 14px;
    }

    p:nth-child(1) {
      color: #999;
    }

    p:nth-child(2) {
      color: #cf4444;
      margin-top: 10px;
    }

    p:nth-child(3) {
      font-size: 14px;
      margin-top: 10px;

      &:hover {
        color: #27ba9b;
      }
    }
  }

  li:nth-child(2)::after, li:nth-child(3)::after, li:nth-child(4)::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 10px;
    height: 60px;
    border-left: 1px solid #e4e4e4;
  }
}
</style>
