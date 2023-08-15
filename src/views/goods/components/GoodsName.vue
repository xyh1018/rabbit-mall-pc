<template>
  <div v-if="goods" class="spec">
    <div class="g-name">{{ goods.name }}</div>
    <div class="g-desc">{{ goods.desc }}</div>
    <div class="g-price">
      <span>{{ goods.price }}</span>
      <span>{{ goods.oldPrice }}</span>
    </div>
    <div class="g-service">
      <dl>
        <dt>促销</dt>
        <dd>12月好物放送，App领券购买直降120元</dd>
      </dl>
      <dl>
        <dt>配送</dt>
        <dd>至
          <XtxCity :full-location="fullLocation" @selectCity="selectCity"></XtxCity>
        </dd>
      </dl>
      <dl>
        <dt>服务</dt>
        <dd>
          <span>无忧退货</span>
          <span>快速退款</span>
          <span>免费包邮</span>
          <a href="javascript:;">了解详情</a>
        </dd>
      </dl>
    </div>
    <GoodsSku :goods="goods"></GoodsSku>
  </div>
</template>

<script>
import { ref } from 'vue'
import GoodsSku from '@/views/goods/components/GoodsSku.vue'

export default {
  components: { GoodsSku },
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    // 默认情况
    // 省份编码
    const provinceCode = ref('110000')
    // 城市编码
    const cityCode = ref('119900')
    // 所在区/县编码
    const countyCode = ref('110101')
    // 完整地址
    const fullLocation = ref('北京市 市辖区 东城区')
    // 有默认地址
    if (props.goods.userAddresses) {
      const defaultAddr = props.goods.userAddresses.find(addr => addr.isDefault === 0)
      if (defaultAddr) {
        provinceCode.value = defaultAddr.provinceCode
        cityCode.value = defaultAddr.cityCode
        countyCode.value = defaultAddr.countyCode
        fullLocation.value = defaultAddr.fullLocation
      }
    }
    const selectCity = (result) => {
      provinceCode.value = result.provinceCode
      cityCode.value = result.cityCode
      countyCode.value = result.countyCode
      fullLocation.value = result.fullLocation
    }
    return {
      fullLocation,
      selectCity
    }
  }
}
</script>

<style scoped lang="less">
.spec {
  flex: 1;
  padding: 30px 30px 30px 0;

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span:first-child {
      color: #cf4444;
      margin-right: 10px;
      font-size: 22px;
    }

    span:last-child {
      color: #999;
      text-decoration: line-through;
      font-size: 16px;
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: @MainGreenColor;
              margin-right: 2px;
            }
          }

          a {
            color: @MainGreenColor;
          }
        }
      }
    }
  }

  .goods-sku {
    padding-left: 10px;
    padding-top: 20px;
  }
}
</style>
