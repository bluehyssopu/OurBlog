import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/Login')
  },
  {
    path: '/index',
    component: () => import('@/view/index'),
    children: [
      {
        path: '/',
        name: 'home',
        meta: ["仪表盘"],
        component: () => import('@/view/Home')
      },
      {
        path: '/userlist',
        name: 'userlist',
        meta: ["用户列表"],
        component: () => import('@/view/userList')
      },
      {
        path: '/articlelist',
        name: 'articlelist',
        meta: ["文章列表"],
        component: () => import('@/view/articleList')
      },
      {
        path: '/loglist',
        name: 'loglist',
        meta: ["日志列表"],
        component: () => import('@/view/LogList')
      },
      {
        path:'/articlecheck',
        name:'articlecheck',
        component: () => import('@/view/articleCheck.vue')
      }
    ]
  },
];


const router = new VueRouter({
  routes
});

export default router;