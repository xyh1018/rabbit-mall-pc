<template>
  <div class="container">
    <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore></XtxMore>
      </template>
    </HomePanel>
    <transition name="fade">
      <ul v-if="newList.length" class="new-list">
        <li class="new-item" v-for="item in newList" :key="item.id">
          <RouterLink to="/">
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
import { onMounted, ref } from 'vue'
import HomeSkeleton from '@/views/home/components/HomeSkeleton.vue'

export default {
  name: 'HomeNew',
  components: {
    HomeSkeleton,
    HomePanel
  },
  setup () {
    const newList = ref([])
    const getNewApi = async () => {
      const { result } = await getNew()
      newList.value = result
    }
    onMounted(() => {
      getNewApi()
    })
    return {
      newList
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
