import request from '@/utils/request'

// 获取热门品牌信息
export function getBrand (params) {
  return request({
    url: '/home/brand',
    methods: 'GET',
    params
  })
}

// 获取轮播图
export function getBanner () {
  return request({
    url: '/home/banner',
    methods: 'GET'
  })
}
