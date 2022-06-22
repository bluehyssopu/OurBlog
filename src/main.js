import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import store from '@/store'
import 'mavon-editor/dist/css/index.css'

// 添加的vue渲染markdown
import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

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