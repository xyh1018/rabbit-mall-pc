<template>
  <div class="container">
    <div class="top">
      <p class="one-title">
        {{ title }}
        <span class="two-title">{{ subtitle }}</span>
      </p>
      <slot name="middle"></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.top {
  display: flex;
  padding: 40px 0;
  align-items: flex-end;

  .one-title {
    font-size: 32px;
    flex: 1;

    .two-title {
      font-size: 16px;
      color: #999999;
      margin-left: 20px;
    }
  }
}
</style>
