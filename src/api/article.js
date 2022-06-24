import request from "@/untils/request.js";
export const requestArticle = (params) => request({
  url:'/article',
  params,
  method:'get'
})