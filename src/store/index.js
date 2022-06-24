import Vue from 'vue'
import Vuex from 'vuex'
 
//1.安装插件
Vue.use(Vuex)
 
//2.创建对象
const store = new Vuex.Store({
  state:{
    logined: 0,
    userId: null,
    onesay:'',
  },
  mutations:{
    changelogin(state,temp){
      state.logined = temp
    },

    changeUserId(state,id){
      state.userId = id
    },
    
    getOnesay(state,said){
      state.onesay = said
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