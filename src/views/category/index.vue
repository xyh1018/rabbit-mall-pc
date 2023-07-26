<template>
  <div class="top-category">
    <div class="container">
      <!--面包屑-->
      <XtxBread>
        <XtxBreadItem path="/">{{ '首页' }}</XtxBreadItem>
        <Transition name="fade-right" appear mode="out-in">
          <XtxBreadItem>{{ list.name }}</XtxBreadItem>
        </Transition>
      </XtxBread>
      <!--轮播图-->
      <div class="banner">
        <XtxCarousel :bannerList="bannerList" auto></XtxCarousel>
      </div>
      <!--全部分类-->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul class="list">
          <li v-for="item in list.children" :key="item.id" class="list-item">
            <RouterLink to="#">
              <img class="item-img" :src="item.picture"
                   alt="">
              <p class="item-name">{{ item.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <!--分类产品-->
      <div v-for="obj in topCateList" :key="obj.id">
        <CategoryGoods :title="obj.name" :goods="obj.goods"></CategoryGoods>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { getBanner } from '@/api/home'
import CategoryGoods from './components/CategoryGoods.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { getTopCategory } from '@/api/category'

export default {
  components: {
    CategoryGoods
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const bannerList = ref([])
    const topCateList = ref([])
    const id = route.params.id
    // 获取轮播图数据
    getBanner().then((data) => {
      bannerList.value = data.result
    })
    const getTopCateApi = async () => {
      const { result } = await getTopCategory(id)
      topCateList.value = result.children
    }
    // 全部分类列表
    const list = computed(() => {
      const cateList = store.state.category.list
      return cateList.find(item => {
        return item.id === id
      })
    })
    watch(() => id, (newValue) => {
      getTopCateApi()
    }, { immediate: true })
    return {
      bannerList,
      list,
      topCateList
    }
  }
}
</script>

<style scoped lang="less">
.top-category {
  .container {
    .banner {
      height: 500px;
      width: 100%;
    }

    .sub-list {
      background: white;
      margin-top: 20px;
      padding: 0 32px 20px;

      h3 {
        font-size: 28px;
        font-weight: normal;
        color: #666666;
        text-align: center;
        line-height: 100px;
      }

      .list {
        display: flex;

        .list-item {
          width: 168px;
          height: 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .item-img {
            width: 100px;
            height: 100px;
          }

          .item-name {
            font-size: 16px;
            font-weight: 500;
            line-height: 40px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
