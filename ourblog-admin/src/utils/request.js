import axios from "axios";
// const service = axios.create({
//     baseURL: '/api',
//     timeout: 30000,
//     headers: {
//         'content-type':'application/json'
//     }
// })
axios.defaults.baseURL = '/api';
axios.defaults.headers = {'content-type':'application/json'}
axios.defaults.withCredentials = true;
export default axios;