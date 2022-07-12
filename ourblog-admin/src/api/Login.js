import request from "@/utils/request.js";

export const Login = (params) => request({
  url: '/admin/user/login',
  data: params,
  method: 'post',
  headers: {
    'content-type':'application/json'
  }
})