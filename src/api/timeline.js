import request from "@/untils/request.js";
export const timeLine = (params) => request({
  url:'/timeline',
  params,
  method:'get'
})