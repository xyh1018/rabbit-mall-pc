import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'

export default {
  install (Vue) {
    Vue.component('XtxSkeleton', XtxSkeleton)
    Vue.component('XtxCarousel', XtxCarousel)
    Vue.component('XtxMore', XtxMore)
  }
}
