<template>
  <div v-if="goods" class="goods-sku">
    <dl v-for="(item, index) in goods.specs" :key="index">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="(val, i) in item.values" :key="i">
          <img :class="{selected: val.selected}" @click="select(item, val)" v-if="val.picture" :src="val.picture"
               alt="">
          <span :class="{selected: val.selected}" @click="select(item, val)" v-else>{{ val.name }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<script>
import bwPowerSet from '@/utils/power-set'

export default {
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const select = (item, val) => {
      if (val.selected) {
        val.selected = !val.selected
      } else {
        item.values.forEach(i => {
          i.selected = false
        })
        val.selected = true
      }
    }
    const getPathMap = () => {
      const skus = props.goods.skus
      const pathMap = {}
      // 得到有效sku
      skus.forEach(sku => {
        // 如果库存大于零
        if (sku.inventory > 0) {
          // 可选值数组 ['红色', '18cm']
          const valueNames = sku.specs.map(obj => {
            return obj.valueName
          })
          // 可选值数组子集
          // [[],['红色'],['18cm'],['红色','18cm']]
          const valueNamesPowerSet = bwPowerSet(valueNames)
          // 遍历子集,插入pathMap
          valueNamesPowerSet.forEach(item => {
            const key = item.join('_')
            if (pathMap[key]) {
              pathMap[key].push(sku.id)
            } else {
              pathMap[key] = [sku.id]
            }
          })
          console.log(pathMap)
        }
      })
      //
      return pathMap
    }
    getPathMap()
    return {
      select
    }
  }
}
</script>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @MainGreenColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;
      line-height: 40px;

      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
