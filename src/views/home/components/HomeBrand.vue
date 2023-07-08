<template>
  <div class="container">
    <HomePanel title="热门品牌" subtitle="国际经典 品质保证">
      <template #right>
        <i class="iconfont icon-left"></i>
        <i class="iconfont icon-right"></i>
      </template>
    </HomePanel>
    <ul class="new-list">
      <li class="new-item" v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <img class="new-item-img" :src="item.picture" alt="">
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { onMounted, ref } from 'vue'
import { getBrand } from '@/api/home'

export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    const newList = ref([])
    const getBrandApi = async () => {
      const { result } = await getBrand({
        limit: 5
      })
      newList.value = result
    }
    onMounted(() => {
      getBrandApi()
    })
    return {
      newList
    }
  }
}
</script>

<style scoped lang="less">
.icon-left, .icon-right {
  color: white;
  background: #ccc;
  border-radius: 4px;
  padding: 0 4px;
}

.active {
  background: #34b99b;
}

.icon-left {
  margin-right: 5px;
}

.new-list {
  display: flex;
  justify-content: space-between;

  .new-item {
    width: 240px;

    &-img {
      width: 240px;
      height: 305px;
    }
  }
}
</style>
