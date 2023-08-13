import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import XtxBread from '@/components/library/xtx-bread.vue'
import XtxBreadItem from '@/components/library/xtx-bread-item.vue'
import XtxCheckbox from '@/components/library/xtx-checkbox.vue'
import XtxInfiniteLoading from '@/components/library/xtx-infinite-loading.vue'
import XtxCity from '@/components/library/xtx-city.vue'
import defaultImg from '@/assets/images/200.png'

export default {
  install (Vue) {
    Vue.component('XtxSkeleton', XtxSkeleton)
    Vue.component('XtxCarousel', XtxCarousel)
    Vue.component('XtxMore', XtxMore)
    Vue.component('XtxBread', XtxBread)
    Vue.component('XtxBreadItem', XtxBreadItem)
    Vue.component('XtxCheckbox', XtxCheckbox)
    Vue.component('XtxInfiniteLoading', XtxInfiniteLoading)
    Vue.component('XtxCity', XtxCity)
    Vue.directive('lazy', lazy)
  }
}
/**
 * 自定义指令
 */
// lazy 图片懒加载
const lazy = {
  mounted (dom, binding) {
    const observe = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        observe.unobserve(dom)
        // 如果获取图片失败,使用默认图片替代
        dom.onerror = () => {
          dom.src = defaultImg
        }
        // 到达图片可视区域再赋值给img标签的src属性
        dom.src = binding.value
      }
    }, {
      threshold: 0
    })
    observe.observe(dom)
  }
}
