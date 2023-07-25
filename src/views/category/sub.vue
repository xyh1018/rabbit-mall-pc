<template>
  <div class="sub-category">
    <div class="container">
      <SubBreak></SubBreak>
    </div>
  </div>
  <div>二级类目</div>
</template>

<script>
import SubBreak from '@/views/category/components/SubBreak.vue'

export default {
  components: { SubBreak },
  setup () {

  }
}
</script>

<style scoped lang="less">
div {
  height: 600px;
}
</style>
