<template>
  <div class="home-category">
    <ul class="category-content">
      <li class="category-item" v-for="item in menuList" :key="item.id" @mouseenter="categoryId=item.id">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink :to="`/category/sub/${children.id}`" v-for="children in item.children" :key="children.id">
            {{ children.name }}
          </RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton width="40px" height="16px" margin="0 12px 0 12px" animated></XtxSkeleton>
          <XtxSkeleton width="40px" height="16px" animated></XtxSkeleton>
        </template>
      </li>
    </ul>
    <div v-if="currentCategory && currentCategory.goods" class="popup-content">
      <div class="popup-item-top">
        <p>{{ currentCategory.id === 'brand' ? '品牌推荐' : '分类推荐' }}</p>
        <p>根据您的购买或浏览记录推荐</p>
      </div>
      <div class="popup-item-main">
        <ul class="main-content">
          <li class="main-content-item" v-for="item in currentCategory.goods" :key="item.id">
            <img :src="item.picture" alt="">
            <div class="main-content-item-text">
              <p class="text-name">{{ item.name }}</p>
              <p class="text-desc">{{ item.desc }}</p>
              <p class="text-price">{{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, reactive, ref } from 'vue'
import { getBrand } from '@/api/home'
import XtxSkeleton from '@/components/library/xtx-skeleton.vue'

export default {
  components: { XtxSkeleton },
  setup () {
    const store = useStore()
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{
        id: 'brand-children',
        name: '品牌推荐'
      }],
      goods: []
    })
    const menuList = computed(() => {
      const list = store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })
    const categoryId = ref(null)
    const currentCategory = computed(() => {
      return menuList.value.find(item => {
        return item.id === categoryId.value
      })
    })
    // 获取品牌数据
    const getBrandApi = async () => {
      const { result } = await getBrand({ limit: 9 })
      brand.goods = result
    }
    onMounted(() => {
      getBrandApi()
    })
    return {
      menuList,
      categoryId,
      currentCategory
    }
  }
}
</script>

<style scoped lang="less">
.home-category {
  display: flex;
  z-index: 999;
  position: absolute;

  .category-content {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 500px;
    align-items: center;
    background: rgba(0, 0, 0, .8);
    overflow: hidden;

    .category-item {
      flex: 1;
      line-height: 50px;
      width: 250px;
      padding-left: 40px;
      display: flex;
      align-items: center;

      &:hover {
        background: #34b99b;
      }

      a {
        color: white;
        margin-right: 4px;
      }
    }
  }

  .popup-content {
    background: rgba(239, 239, 239, 0.8);
    height: 500px;
    flex: 1;
    top: 0;
    left: 250px;
    line-height: initial;
    overflow: hidden;
    padding: 0 20px 30px 20px;
    display: none;

    .popup-item-top {
      display: flex;
      align-items: center;
      padding: 30px 0;

      p:first-child {
        font-size: 20px;
        font-weight: 400;
        margin-right: 10px;
      }

      p:last-child {
        font-size: 14px;
        font-weight: 400;
        color: #7a7a7a;

      }
    }

    .popup-item-main {

      .main-content {
        display: flex;
        flex-wrap: wrap;

        .main-content-item {
          height: 120px;
          width: 300px;
          display: flex;
          background: white;
          margin: 0 15px 15px 0;
          padding: 10px;

          &:hover {
            box-shadow: 3px 3px 15px #a1a1a1;
          }

          img {
            width: 100px;
            height: 100px;
            margin-right: 10px;
          }

          .main-content-item-text {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .text-name {
              font-size: 16px;
            }

            .text-desc {
              font-size: 14px;
            }

            .text-price {
              font-size: 22px;
              color: #cf4444;
              flex: 1;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }

  &:hover {
    .popup-content {
      display: block;
    }
  }
}
</style>
