<template>
  <div class="filter-container">
    <div class="filter-item">
      <div class="head">品牌：</div>
      <div class="body">
        <a v-for="brand in list.brands" :key="brand.id"
           :class="{active: brand.id === list.brands.selectedBrand}"
           @click="setBrands(brand.id, brand.name)"
           class="body-item ellipsis"
           href="javascript:;"
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
           href="javascript:;"
           @click="setProperties(filters.id, item.id, item.name)"
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
  setup (props, { emit }) {
    const route = useRoute()
    const list = ref([])
    const filterParams = []
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
      console.log('过滤选项数据', result)
    }
    const setBrands = (id, name) => {
      list.value.brands.selectedBrand = id
    }
    const setProperties = (filtersId, itemId, name) => {
      list.value.saleProperties.forEach(item => {
        if (filtersId === item.id) {
          item.properties.selectedAttr = itemId
          // 判断filterParams是否为空数组
          if (!filterParams.length) {
            filterParams.push({
              groupName: item.name,
              propertyName: name
            })
          } else {
            // 查找与filterParams的元素的groupName是否与saleProperties元素的name相等
            const value = filterParams.find(param => {
              return param.groupName === item.name
            })
            if (value) {
              filterParams.forEach(obj => {
                if (value.groupName === obj.groupName) {
                  obj.propertyName = name
                }
              })
            } else {
              filterParams.push({
                groupName: item.name,
                propertyName: name
              })
            }
          }
        }
      })
      emit('getFilter', filterParams)
    }
    onMounted(() => {
      getSubFilterApi()
    })
    return {
      list,
      setBrands,
      setProperties
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
