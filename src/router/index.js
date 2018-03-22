import Vue from 'vue'

import VueRouter  from 'vue-router'

Vue.use(VueRouter)
 import Classify from '../pages/Classify/Classify'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import ShopCart from '../pages/ShopCart/ShopCart'
import Assortment from '../pages/Classify/Assortment/Assortment'
import Brand from '../pages/Classify/Brand/Brand'
import Total from '../pages/Total/Total'
import Password from '../pages/Profile/Password/Password'
import Mobile from '../pages/Profile/Mobile/Mobile'

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
    {path:'/profile',component:Profile,
      children:[
        {path:'/profile/password',component:Password},
        {path:'/profile/mobile',component:Mobile},
        {path:'/',redirect:'/profile/password'}
      ]
    },
    {path:'/shopcart',component:ShopCart},
    {path:'/total',component:Total}


    ]
})

