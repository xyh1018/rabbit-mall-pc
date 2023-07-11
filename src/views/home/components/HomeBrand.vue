<template>
  <div ref="target" class="container brand">
    <HomePanel title="热门品牌" subtitle="国际经典 品质保证">
      <template #right>
        <i class="iconfont icon-left brand-icon-left" @click="toggle(0)"></i>
        <i class="iconfont icon-right brand-icon-right active" @click="toggle(1)"></i>
      </template>
    </HomePanel>
    <ul v-if="newList.length" class="brand-new-list">
      <li class="new-item" v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <img class="new-item-img" :src="item.picture" alt="">
        </RouterLink>
      </li>
    </ul>
    <HomeSkeleton v-else :num="5" :width="240" background="#f5f5f5" :show="false"
                  :height="305"></HomeSkeleton>
  </div>
</template>

<script>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { ref } from 'vue'
import { getBrand } from '@/api/home'
import { useLazyData } from '@/utils/tools'
import HomeSkeleton from '@/views/home/components/HomeSkeleton.vue'

export default {
  name: 'HomeBrand',
  components: {
    HomeSkeleton,
    HomePanel
  },
  setup () {
    const newList = ref([])
    const target = ref(null)
    const getBrandApi = async () => {
      const { result } = await getBrand({
        limit: 10
      })
      newList.value = result
    }
    useLazyData(target, getBrandApi)
    const toggle = (index) => {
      const list = document.querySelector('.brand-new-list')
      const left = document.querySelector('.brand-icon-left')
      const right = document.querySelector('.brand-icon-right')
      if (index === 0) {
        left.classList.remove('active')
        right.classList.add('active')
        right.style = 'cursor: inherit;'
        left.style = 'cursor: not-allowed;'
        list.style = 'transform: translateX(0px);'
      } else {
        right.classList.remove('active')
        left.classList.add('active')
        left.style = 'cursor: inherit;'
        right.style = 'cursor: not-allowed;'
        list.style = 'transform: translateX(-1240px);'
      }
    }
    return {
      newList,
      toggle,
      target
    }
  }
}
</script>

<style scoped lang="less">
.container.brand {
  overflow: hidden;

  .icon-left, .icon-right {
    color: white;
    background: #ccc;
    border-radius: 4px;
    padding: 0 4px;
  }

  .icon-left {
    margin-right: 5px;
  }

  .brand-new-list {
    display: flex;
    justify-content: space-between;
    width: 200%;
    //transform: translateX(0px);
    transition: all 1s;

    .new-item {
      width: 240px;

      &-img {
        width: 240px;
        height: 305px;
      }
    }
  }

  .active {
    background: #34b99b;
  }
}

</style>
