<script>
import { h } from 'vue'

export default {
  name: 'XtxBreak',
  render () {
    // 获取默认插槽内容
    const items = this.$slots.default()
    const newItems = []
    // 遍历节点,并添加i标签,最后一个子节点不添加
    items.forEach((item, index) => {
      newItems.push(item)
      if (index < (items.length - 1)) {
        newItems.push(h('i', { class: 'iconfont icon-right' }))
      }
    })
    return h('div', { class: 'xtx-bread' }, newItems)
  }
}
</script>

<style lang="less">
.xtx-bread {
  display: flex;
  font-size: 14px;
  color: #666666;
  padding: 25px 10px;

  .bread-item {
    a {
      font-size: 14px;
      color: #666;
    }
  }

  .icon-right {
    font-size: 12px;
    margin: 0 5px 0 5px;
    line-height: 22px;
  }
}
</style>
