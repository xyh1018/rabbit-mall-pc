<template>
  <div class="home-banner">
    <XtxCarousel :bannerList="bannerList" auto></XtxCarousel>
  </div>
</template>

<script>
import { getBanner } from '@/api/home'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const bannerList = ref([])
    const getBannerApi = async () => {
      const { result } = await getBanner()
      bannerList.value = result
    }
    onMounted(() => {
      getBannerApi()
    })
    return {
      bannerList
    }
  }
}
</script>

<style scoped lang="less">
.home-banner {
  height: 500px;
  width: 1240px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}

.xtx-carousel {
  ::v-deep(.carousel-btn.prev) {
    left: 270px;
  }

  ::v-deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
