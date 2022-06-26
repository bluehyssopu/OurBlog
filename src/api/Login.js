import request from "@/untils/request.js";
export const LoginBlog = (params) => request({
  url:'/user/login',
  data:params,
  method:'post',
  headers:{
    'content-type':'application/json'
  }
})