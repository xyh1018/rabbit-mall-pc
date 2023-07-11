<template>
  <div ref="target" class="container">
    <HomePanel title="人气推荐" subtitle="人气爆款 不容错过"></HomePanel>
    <transition name="fade">
      <ul v-if="newList.length" class="new-list">
        <li class="new-item" v-for="item in newList" :key="item.id">
          <RouterLink to="/">
            <img class="new-item-img" :src="item.picture" alt="">
            <span class="new-item-name ellipsis">{{ item.title }}</span>
            <span class="new-item-price">{{ item.alt }}</span>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else></HomeSkeleton>
    </transition>
  </div>
</template>

<script>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { ref } from 'vue'
import { getHot } from '@/api/home'
import HomeSkeleton from '@/views/home/components/HomeSkeleton.vue'
import { useLazyData } from '@/utils/tools'

export default {
  name: 'HomeHot',
  components: {
    HomeSkeleton,
    HomePanel
  },
  setup () {
    const newList = ref([])
    const target = ref(null)
    const getHotApi = async () => {
      const { result } = await getHot()
      newList.value = result
    }
    useLazyData(target, getHotApi)
    return {
      newList,
      target
    }
  }
}
</script>

<style scoped lang="less">
.new-list {
  display: flex;
  justify-content: space-between;

  .new-item {
    width: 305px;
    transition: all 0.5s;
    .hoverShadow();

    &-img {
      width: 305px;
      height: 305px;
    }

    &-name {
      font-size: 22px;
      line-height: 50px;
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }

    &-price {
      font-size: 18px;
      color: #999999;
      line-height: 50px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
