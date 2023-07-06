import request from '@/utils/request'

// 获取首页全部分类（包含推荐商品）
export function getHeadCategory () {
  return request({
    url: '/home/category/head',
    methods: 'GET'
  })
}
