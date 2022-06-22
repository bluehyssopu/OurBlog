import request from "@/untils/request.js";
export const LoginBlog = (params) => request({
  url:'/login',
  params,
  method:'post'
})