import Vue from 'vue'
import Vuex from 'vuex'
 
//1.安装插件
Vue.use(Vuex)
 
//2.创建对象
const store = new Vuex.Store({
  state:{
    logined: 0
  },
  mutations:{
    changelogin(state,temp){
      state.logined = temp
    }
  },
  actions:{
 
  },
  getters:{
 
  },
  modules:{
    
  }
})
//3.导出使用
export default store