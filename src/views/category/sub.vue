<template>
  <div class="sub-category">
    <div class="container">
      <SubBreak></SubBreak>
      <SubFilter></SubFilter>
      <div class="goods-list">
        <SubSort></SubSort>
        <ul class="list">
          <li class="item" v-for="goods in goodsList" :key="goods.id">
            <GoodsItem :item="goods"></GoodsItem>
          </li>
        </ul>
        <XtxInfiniteLoading :loading="loading" :finished="finished" @infinite="getData"></XtxInfiniteLoading>
      </div>
    </div>
  </div>
</template>

<script>
import SubBreak from '@/views/category/components/SubBreak.vue'
import SubFilter from '@/views/category/components/SubFilter.vue'
import { ref } from 'vue'
import SubSort from '@/views/category/components/SubSort.vue'
import GoodsItem from '@/views/category/components/GoodsItem.vue'
import { getSubGoods } from '@/api/category'
import { useRoute } from 'vue-router'

export default {
  components: {
    GoodsItem,
    SubSort,
    SubFilter,
    SubBreak
  },
  setup () {
    const route = useRoute()
    const isAllChecked = ref(false)
    const loading = ref(false)
    const finished = ref(false)
    // 商品列表
    const goodsList = ref([])
    // 请求数据
    const reqData = {
      page: 1,
      pageSize: 20
    }
    const getData = () => {
      loading.value = true
      reqData.categoryId = route.params.id
      getSubGoods(reqData).then(({ result }) => {
        // 如果获取的数据有长度,则添加到goodsList里
        if (result.items.length) {
          goodsList.value.push(...result.items)
          reqData.page++
        } else {
          // 如果没有数据,则加载完成
          finished.value = true
        }
        loading.value = false
      })
    }
    return {
      isAllChecked,
      loading,
      finished,
      goodsList,
      getData
    }
  }
}
</script>

<style scoped lang="less">
.sub-category {
  .container {
    .goods-list {
      background: white;
      margin-top: 25px;
      padding: 0 25px;

      .list {
        display: flex;
        flex-wrap: wrap;
        padding-left: 46px;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;

        }
      }
    }
  }
}
</style>
