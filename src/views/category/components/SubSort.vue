<template>
  <div class='sub-sort'>
    <div class="sort">
      <a :class="{active:sortParams.sortField===null}" @click="changeSort(null)" href="javascript:;">默认排序</a>
      <a :class="{active:sortParams.sortField==='publishTime'}" @click="changeSort('publishTime')" href="javascript:;">最新商品</a>
      <a :class="{active:sortParams.sortField==='orderNum'}" @click="changeSort('orderNum')"
         href="javascript:;">最高人气</a>
      <a :class="{active:sortParams.sortField==='evaluateNum'}" @click="changeSort('evaluateNum')" href="javascript:;">评论最多</a>
      <a @click="changeSort('price')" href="javascript:;">
        价格排序
        <i class="arrow up" :class="{active:sortParams.sortField==='price'&&sortParams.sortMethod==='asc'}"/>
        <i class="arrow down" :class="{active:sortParams.sortField==='price'&&sortParams.sortMethod==='desc'}"/>
      </a>
    </div>
    <div class="check">
      <XtxCheckbox @click="changeSelect" v-model="sortParams.inventory">仅显示有货商品
      </XtxCheckbox>
      <XtxCheckbox @click="changeSelect" v-model="sortParams.onlyDiscount">
        仅显示特惠商品
      </XtxCheckbox>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup (props, { emit }) {
    const sortParams = reactive({
      inventory: false, // 是否有库存
      onlyDiscount: false, // 只显示特惠
      sortField: null, // 排序字段 取值范围：[publishTime,orderNum,price,evaluateNum]
      sortMethod: '' // 排序规则，asc为正序，desc为倒序，默认为desc
    })
    const changeSort = (sortField) => {
      // 当前点击的是价格排序
      if (sortField === 'price') {
        sortParams.sortField = sortField
        // 如果sortParams.sortMethod为空,则取默认值desc
        if (sortParams.sortMethod === '') {
          sortParams.sortMethod = 'desc'
        } else {
          // 如果不为空,则判断sortParams.sortMethod的值,然后取反
          sortParams.sortMethod = sortParams.sortMethod === 'desc' ? 'asc' : 'desc'
        }
      } else {
        // 当前点击的不是价格排序
        // 判断点击的按钮是不是已经激活的按钮, 是则返回
        if (sortParams.sortField === sortField) return
        sortParams.sortField = sortField
        sortParams.sortMethod = ''
      }
      // 调用自定义事件,来获取排序数据
      emit('getSort', sortParams)
    }
    const changeSelect = (value) => {
      emit('getSort', sortParams)
    }
    return {
      sortParams,
      changeSort,
      changeSelect
    }
  }
}
</script>

<style scoped lang="less">
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .sort {
    display: flex;

    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all .3s;

      &.active {
        background: @MainGreenColor;
        border-color: @MainGreenColor;
        color: #fff;
      }

      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;

        &.up {
          top: 3px;
          border-bottom-color: #bbb;

          &.active {
            border-bottom-color: @MainGreenColor;
          }
        }

        &.down {
          top: 15px;
          border-top-color: #bbb;

          &.active {
            border-top-color: @MainGreenColor;
          }
        }
      }
    }
  }

  .check {
    .xtx-checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>
