import Vue from 'vue'

import VueRouter  from 'vue-router'

Vue.use(VueRouter)
 import Classify from '../pages/Classify/Classify'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import ShopCart from '../pages/ShopCart/ShopCart'
import Assortment from '../pages/Classify/Assortment/Assortment'
import Brand from '../pages/Classify/Brand/Brand'

export  default new VueRouter({
  routes:[
    {path:'/',redirect:'/msite',},
    {path:'/classify',component:Classify,
      meta:{
        showFooter:true
      },
      children:[
        {path:'/classify/assortment',component:Assortment,
          meta:{
            showFooter:true
          }

        },
        {path:'/classify/brand',component:Brand,
          meta:{
            showFooter:true
          }
          },
        {path:'/',redirect:'/classify/assortment'}
      ]


      },
    {path:'/msite',component:Msite,
      meta:{
        showFooter:true
      }},
    {path:'/profile',component:Profile},
    {path:'/shopcart',component:ShopCart}


    ]
})

