<template>
  <div class='xtx-goods-page'>
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem path="/">首页</XtxBreadItem>
        <XtxBreadItem v-if="goods" :path="`/category/${goods.categories[1].id}`">
          {{ goods.categories[1].name }}
        </XtxBreadItem>
        <XtxBreadItem v-if="goods" :path="`/category/sub/${goods.categories[0].id}`">
          {{ goods.categories[0].name }}
        </XtxBreadItem>
        <XtxBreadItem v-if="goods">{{ goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage v-if="goods" :images="goods.mainPictures"></GoodsImage>
          <GoodsSales></GoodsSales>
        </div>
        <GoodsName v-if="goods" :goods="goods"></GoodsName>
      </div>
    </div>
    <!-- 商品推荐 -->
    <GoodsRelevant/>
    <!-- 商品详情 -->
    <div class="goods-footer">
      <div class="goods-article">
        <!-- 商品+评价 -->
        <div class="goods-tabs"></div>
        <!-- 注意事项 -->
        <div class="goods-warn"></div>
      </div>
      <!-- 24热榜+专题推荐 -->
      <div class="goods-aside"></div>
    </div>
  </div>

</template>

<script>
import GoodsRelevant from './components/GoodsRelevant.vue'
import { getGoodsDetails } from '@/api/goods'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsImage from '@/views/goods/components/GoodsImage.vue'
import GoodsSales from '@/views/goods/components/GoodsSales.vue'
import GoodsName from '@/views/goods/components/GoodsName.vue'

export default {
  components: {
    GoodsName,
    GoodsSales,
    GoodsImage,
    GoodsRelevant
  },
  setup () {
    // goods 商品详情页的数据
    const goods = ref(null)
    const route = useRoute()
    // const getGoods = async () => {
    //   const data = await getGoodsDetails(route.params.id)
    //   goods.value = data.result
    // }
    // getGoods()
    getGoodsDetails(route.params.id).then(data => {
      goods.value = data.result
    })
    return {
      goods
    }
  }
}
</script>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;

  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }

}

.goods-footer {
  display: flex;
  margin-top: 20px;

  .goods-article {
    width: 940px;
    margin-right: 20px;
  }

  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;
}

.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
