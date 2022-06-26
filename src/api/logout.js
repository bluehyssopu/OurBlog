import request from "@/untils/request.js";
export const logout = () => request({
  url:'/user/logout',
  method:'get'
})