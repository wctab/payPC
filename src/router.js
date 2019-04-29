import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Index from "./views/index.vue"
import Details from "./views/Details.vue"
import NotFound from "./views/notFound.vue"
import Active from "./views/Active"
import Laptop from "./views/game_laptop"
import Login from "./views/login"
import Phone from "./views/phone"
import singe_game from "./views/singe_game"
import Surrounding from "./views/surrounding"
import Bheader from "./components/Bheader"
import register from "./views/register"

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {path: '/', component: Index},
    {path: '/index', component: Index},
    {path: '/Gdetails',name:"Details", component:Details,props:true},
    {path: '/active', component: Active},
    {path: '/game_laptop',name:"products", component: Laptop,props:true},
    {path: '/home', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: register},
    {path: '/phone', component: Phone},
    {path: '/singe_game', component:singe_game},
    {path: '/surrounding', component:Surrounding},

    {path: '*', component: NotFound}
  ]
})
