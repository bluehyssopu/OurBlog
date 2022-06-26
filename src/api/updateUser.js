import request from "@/untils/request.js";
export const updateUser = (params) => request({
  url:'/user/update',
  data:params,
  method:'post'
})