import request from '@/utils/request'

/**
 * 获取首页全部分类（包含推荐商品）
 * */
export function getHeadCategory () {
  return request({
    url: '/home/category/head',
    methods: 'GET'
  })
}

/**
 * 获取一级分类列表
 * */
export function getTopCategory (id) {
  return request({
    url: '/category',
    methods: 'GET',
    params: {
      id: id
    }
  })
}

/**
 * 二级类目-筛选条件
 * @param {string | Number} id - 二级分类id
 * */
export function getSubFilter (id) {
  return request({
    url: '/category/sub/filter',
    methods: 'GET',
    params: {
      id: id
    }
  })
}
