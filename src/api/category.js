import request from '@/utils/request'

/**
 * 获取首页全部分类（包含推荐商品）
 * */
export function getHeadCategory () {
  return request({
    url: '/home/category/head',
    method: 'GET'
  })
}

/**
 * 获取一级分类列表
 * */
export function getTopCategory (id) {
  return request({
    url: '/category',
    method: 'GET',
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
    method: 'GET',
    params: {
      id: id
    }
  })
}

/**
 * 二级类目商品数据
 * @param {Object} data
 * */
export function getSubGoods (data) {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
