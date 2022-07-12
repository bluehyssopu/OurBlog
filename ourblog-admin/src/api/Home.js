import request from "@/utils/request.js";

export const ucount = () => request({
  url: '/ucount',
  method: 'get'
})
export const bcount = () => request({
  url: '/bcount',
  method: 'get'
})
export const acount = () => request({
  url: '/acount',
  method: 'get'
})
export const classify = () =>request({
  url:'/admin/categoryList',
  method:'get'
})
export const tags = () => request({
  url:'/admin/tagList',
  method:'get'
})
export const articleList = (params) => request({
  url:'/admin/article/list',
  params,
  method:'get'
})
export const articlePass = (params) => request({
  url:'/admin/article/update',
  data:params,
  method:'post',
  headers:{
    'content-type':'application/json'
  }
})
export const userList = (params) => request({
  url:'/admin/user/list',
  params,
  method:'get'
})
export const userChange = (params) => request({
  url:'/admin/user/update',
  data:params,
  method:'post'
})

export const logList = () => request({
  url:'/logsList',
  method:'get'
})