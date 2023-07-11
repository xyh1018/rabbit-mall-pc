<template>
  <div ref="target" class="container">
    <ul>
      <li v-for="item in productList" :key="item.id">
        <HomePanel :title="item.name">
          <template #middle>
            <div class="sub">
              <RouterLink v-for="n in item.children" :key="n.id" to="/">{{ n.name }}</RouterLink>
            </div>
          </template>
          <template #right>
            <XtxMore></XtxMore>
          </template>
        </HomePanel>
        <div class="product-content">
          <img class="product-content-pic" :src="item.picture" alt="">
          <ul class="product-content-right">
            <li class="product-content-right-item" v-for="good in item.goods" :key="good.id">
              <div class="goods-item">
                <img class="item-pic" :src="good.picture" alt="">
                <span class="item-name">{{ good.name }}</span>
                <span class="item-desc ellipsis">{{ good.desc }}</span>
                <span class="item-price">{{ good.price }}</span>
                <div>
                  <RouterLink to="/" class="position">
                    <span>找相似</span>
                    <span>发现更多宝贝</span>
                  </RouterLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { getProduct } from '@/api/home'
import { ref } from 'vue'
import { useLazyData } from '@/utils/tools'

export default {
  components: { HomePanel },
  setup () {
    const productList = ref([])
    const target = ref(null)
    const getProductApi = async () => {
      const { result } = await getProduct()
      productList.value = result
    }
    useLazyData(target, getProductApi)
    return {
      productList,
      target
    }
  }
}
</script>

<style scoped lang="less">
.sub {
  font-size: 16px;

  a {
    padding: 2px 12px;

    &:last-child {
      margin-right: 60px;
    }

    &:hover {
      color: white;
      background: #34b99b;
      border-radius: 6px;
    }
  }
}

.product-content {
  display: flex;

  .product-content-pic {
    width: 240px;
    height: 610px;
    object-fit: cover;
    margin-right: 20px;
  }

  .product-content-right {
    width: 990px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    .product-content-right-item {

      .goods-item {
        width: 240px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 30px;
        overflow: hidden;
        border: 1px solid transparent;
        transition: all .5s;
        position: relative;

        &:hover {
          border-color: #34b99b;

          .position {
            transform: none;
          }
        }

        .position {
          height: 86px;
          width: 100%;
          background: #27ba9b;
          position: absolute;
          left: 0;
          text-align: center;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          transform: translate3d(0, 110%, 0);
          transition: all .5s;

          span {
            line-height: 40px;
            font-size: 14px;

            &:first-child {
              font-size: 18px;
              padding: 0 30px;
              border-bottom: 1px solid white;
            }
          }
        }
      }

      .item-pic {
        width: 160px;
        height: 160px;
        margin: 0 auto;
      }

      .item-name {
        font-size: 16px;
        padding-top: 7px;
      }

      .item-desc {
        font-size: 16px;
        color: #666;
        padding-top: 7px;
      }

      .item-price {
        font-size: 20px;
        color: #cf4444;
        padding-top: 10px;
      }
    }
  }
}
</style>
