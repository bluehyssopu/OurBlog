import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index.vue";
import Writerline from "@/views/Writerline.vue"
import Home from "@/views/Home.vue"
import Classify from "@/views/Classify.vue";
import Search from "@/views/Search.vue";
import Edit from "@/views/Edit.vue";
import Myarticle from "@/views/Myarticle.vue";
import Login from "@/views/Login.vue"
import Article from "@/views/Article.vue"
import store from '@/store/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'timeline',
        component: Writerline
      },
      {
        path: 'classify',
        component: Classify
      },
      {
        path: 'search',
        component: Search
      },
      {
        path: 'edit',
        component: Edit
      },
      {
        path: 'myarticle',
        component: Myarticle
      },
      {
        path: 'article',
        component: Article
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if(store.state.logined === 0){
    if (to.path === '/home'){
      next()
      console.log(11111) 
    }
    else if(to.path === '/login'){
      console.log(22222) 
      next()
    }
    else{
      console.log(33333)
      next('/login')
    }
  }
  else{
    next()
  }
});
export default router
