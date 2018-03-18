import Vue from 'vue'

import VueRouter  from 'vue-router'

Vue.use(VueRouter)
 import Classify from '../pages/Classify/Classify'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import ShopCatrt from '../pages/ShopCatrt/ShopCatrt'
export  default new VueRouter({
  routes:[
    {path:'/',redirect:'/msite'},
    {path:'/classify',component:Classify},
    {path:'/msite',component:Msite},
    {path:'/profile',component:Profile},
    {path:'/shopcatrt',component:ShopCatrt}


    ]
})
