<template>
  <div class="xtx-checkbox" @click="changeChecked()">
    <i v-if="modelValue" class="iconfont icon-check-item"></i>
    <i v-else class="iconfont icon-checkbox-weixuan"></i>
    <span v-if="$slots.default"><slot/></span>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'

export default {
  name: 'XtxCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const checked = useVModel(props, 'modelValue', emit)
    const changeChecked = () => {
      checked.value = !checked.value
    }
    return {
      checked,
      changeChecked
    }
  }
}
</script>

<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;

  .icon-check-item {
    color: @MainGreenColor;

    ~ span {
      color: @MainGreenColor;
    }
  }

  i {
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 2px;
  }
}
</style>
