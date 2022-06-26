import request from "@/untils/request.js";
export const requestArticle = (params) => request({
  url:'/blog/list',
  params,
  method:'get'
})