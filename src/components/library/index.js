import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'

export default {
  install (app) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarousel', XtxCarousel)
  }
}
