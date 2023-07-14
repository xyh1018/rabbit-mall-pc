// 提供复用逻辑函数

/**
 * 数据懒加载函数,通过vueUse库中的useIntersectionObserver()实现
 * @param {HTMLElement} target - Dom对象
 * @param {Function} apiFn - API函数
 */

import { useIntersectionObserver } from '@vueuse/core'

export const useLazyData = (target, apiFn) => {
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        apiFn()
      }
    }
  )
}
