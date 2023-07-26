<template>
  <div class="cate-goods">
    <div class="head">
      <div class="title">
        <h3>- {{ title }} -</h3>
        <p>温暖柔软，品质之选</p>
      </div>
      <XtxMore class="more"></XtxMore>
    </div>
    <div class="body">
      <ul class="body-list">
        <li class="item" v-for="item in goods" :key="item.id">
          <GoodsItem :item="item"></GoodsItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/views/category/components/GoodsItem.vue'

export default {
  name: 'CategoryGoods',
  components: { GoodsItem },
  props: {
    goods: {
      required: true,
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.cate-goods {
  background: white;
  margin-top: 20px;
  padding-top: 28px;

  .head {
    display: flex;
    align-items: center;

    .title {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 28px;
        font-weight: 400;
        color: #666666;
      }

      p {
        font-size: 20px;
        color: #999999;
      }
    }

    .more {
      position: absolute;
      right: 20px;
    }
  }

  .body {
    padding: 30px 65px;

    .body-list {
      display: flex;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;

      }
    }
  }
}
</style>
