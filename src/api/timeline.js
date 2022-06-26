import request from "@/untils/request.js";
export const timeLine = (params) => request({
  url:'/blog/blogTime',
  params,
  method:'get'
})