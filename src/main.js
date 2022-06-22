import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import store from '@/store'

import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import { LoginBlogApi } from '@/api'
async function myfun() {
  const res = await LoginBlogApi({
    email:'sowegn2941@163.com',
    password:'20011031Czczcz'
  });
  console.log(res);   
}
myfun()

console.log(window.sessionStorage)