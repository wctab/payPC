import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import axios from "axios"
import qs from 'qs'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    uname:"",
    isLogin:false,
    status:"",
    cartData:[]
  },
  getters:{
    isLogin:state=>state.isLogin,
  },
  //设置属性状态
  mutations:{
    //保存登录状态
    user(state,uname){
      sessionStorage.setItem("uname",uname);
      state.uname=uname;
    },
    flag(state,flag){
      sessionStorage.setItem("flag",flag);
      state.isLogin = flag;
    },
    status(state,status){
      sessionStorage.setItem("status",status);
      state.status = status;
    }
  }
})
/*
router.beforeEach((to,from,next)=>{
  let getFlag = localStorage.getItem("flag");
  let getUname = localStorage.getItem("uname");
  let getStatus = localStorage.getItem("status");
  if(getFlag ==="isLogin"){
    store.state.isLogin =true;
    store.state.uname = getUname;
    store.state.status = getStatus;
  }else{
    next();
  }
})*/


import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)


Vue.config.productionTip = false

axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
