<template>
  <div class="sub-category">
    <div class="container">
      <SubBreak></SubBreak>
      <SubFilter></SubFilter>
      <div class="goods-list">
        <SubSort></SubSort>
        <ul class="list">
          <li class="item" v-for="item in 20" :key="item">
            <GoodsItem :item="item"></GoodsItem>
          </li>
        </ul>
        <XtxInfiniteLoading></XtxInfiniteLoading>
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

export default {
  components: {
    GoodsItem,
    SubSort,
    SubFilter,
    SubBreak
  },
  setup () {
    const isAllChecked = ref(false)
    return {
      isAllChecked
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

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
      }
    }
  }
}
</style>
