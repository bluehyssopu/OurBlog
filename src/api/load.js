import request from "@/untils/request.js";
export const load = (params) => request({
  url:'/file/download',
  params,
  method: 'get',
  responseType:'blob'
})