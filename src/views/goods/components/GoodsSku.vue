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
export default {
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
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
