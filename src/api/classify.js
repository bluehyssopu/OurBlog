import request from "@/untils/request.js";
export const classify = () => request({
  url:'/category/list',
  method:'get'
})