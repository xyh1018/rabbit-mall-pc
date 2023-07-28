<template>
  <div class="container" ref="target">
    <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore></XtxMore>
      </template>
    </HomePanel>
    <transition name="fade">
      <ul v-if="newList.length" class="new-list">
        <li class="new-item" v-for="item in newList" :key="item.id">
          <RouterLink :to="`/goods/${item.id}`">
            <img class="new-item-img" :src="item.picture" alt="">
            <span class="new-item-name ellipsis">{{ item.name }}</span>
            <span class="new-item-price">{{ item.price }}</span>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else></HomeSkeleton>
    </transition>
  </div>

</template>

<script>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { getNew } from '@/api/home'
import { ref } from 'vue'
import HomeSkeleton from '@/views/home/components/HomeSkeleton.vue'
import { useLazyData } from '@/utils/tools'

export default {
  name: 'HomeNew',
  components: {
    HomeSkeleton,
    HomePanel
  },
  setup () {
    const newList = ref([])
    const target = ref(null)
    const getNewApi = async () => {
      const { result } = await getNew()
      newList.value = result
    }
    useLazyData(target, getNewApi)
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
    background: #f0f9f4;
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
    }

    &-price {
      font-size: 22px;
      color: #cf4444;
      line-height: 50px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
