<template>
  <div class="sub-category">
    <div class="container">
      <!--面包屑-->
      <SubBreak></SubBreak>
      <!--条件过滤组件-->
      <SubFilter @getFilter="getFilterData"></SubFilter>
      <div class="goods-list">
        <!--排序组件-->
        <SubSort @getSort="getSortData"></SubSort>
        <ul class="list">
          <li class="item" v-for="goods in goodsList" :key="goods.id">
            <GoodsItem :item="goods"></GoodsItem>
          </li>
        </ul>
        <!--无限加载组件-->
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
    // 加载状态 true:正在加载 false:加载完成
    const loading = ref(false)
    // 数据是否加载完
    const finished = ref(false)
    // 商品列表
    const goodsList = ref([])
    // 请求数据
    let reqData = {
      page: 1,
      pageSize: 20,
      attrs: []
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
    const getSortData = (sortParams) => {
      finished.value = true
      reqData = {
        page: 1,
        pageSize: 20,
        attrs: reqData.attrs
      }
      reqData.categoryId = route.params.id
      reqData = { ...sortParams, ...reqData }
      goodsList.value = []
      getSubGoods(reqData).then(({ result }) => {
        goodsList.value = result.items
        reqData.page++
        finished.value = false
      })
    }
    const getFilterData = (attrs) => {
      finished.value = true
      reqData.categoryId = route.params.id
      reqData = {
        ...reqData,
        attrs
      }
      goodsList.value = []
      getSubGoods(reqData).then(({ result }) => {
        goodsList.value = result.items
        reqData.page++
        finished.value = false
      })
    }
    return {
      isAllChecked,
      loading,
      finished,
      goodsList,
      getData,
      getSortData,
      getFilterData
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
