<template>
  <div class="filter-container">
    <div class="filter-item">
      <div class="head">品牌：</div>
      <div class="body">
        <a v-for="brand in list.brands" :key="brand.id"
           :class="{active: brand.id === list.brands.selectedBrand}"
           class="body-item ellipsis"
           href=""
        >
          {{ brand.name }}
        </a>
      </div>
    </div>
    <div v-for="filters in list.saleProperties" :key="filters.id"
         class="filter-item"
    >
      <div class="head">{{ filters.name }}：</div>
      <div class="body">
        <a v-for="item in filters.properties" :key="item.id"
           :class="{active: item.id === filters.properties.selectedAttr}"
           class="body-item ellipsis-filter"
           href=""
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getSubFilter } from '@/api/category'

export default {
  setup () {
    const route = useRoute()
    const list = ref([])
    const getSubFilterApi = async () => {
      const { result } = await getSubFilter(route.params.id)
      result.brands.selectedBrand = null
      result.brands.unshift({
        id: null,
        name: '全部'
      })
      result.saleProperties.forEach(item => {
        item.properties.selectedAttr = null
        item.properties.unshift({
          id: null,
          name: '全部'
        })
      })
      list.value = result
    }
    onMounted(() => {
      getSubFilterApi()
    })
    return {
      list
    }
  }
}
</script>

<style scoped lang="less">
.filter-container {
  width: 100%;
  background: white;
  padding: 25px;

  .filter-item {
    display: flex;

    .head {
      width: 80px;
      height: 40px;
      font-size: 14px;
      color: #999999;
      line-height: 40px;
    }

    .body {
      flex: 1;

      .body-item {

        max-width: 100px;
        margin-right: 36px;
        height: 40px;
        line-height: 40px;

        &.active,
        &:hover {
          color: @MainGreenColor;
        }
      }
    }
  }
}
</style>
