//触发mutation调用间接更新状态的对象
  import {
    reqShopNav,
    reqCategorys,
    reqBrands
  } from "../api";

import {
  RECEIVE_CATEGORYS,
  RECEIVE_HOMEPAGE,
  RCEIVE_ALLBRANDS
}
from './mutation-types'

export default {
  async getShopNav({commit}){
    const result = await reqShopNav()
    if(result.code===0){
      const menus = result.data
      commit (RECEIVE_HOMEPAGE,{menus})
    }
  },
  async getCategorys({commit}){
    const result = await reqCategorys()
    if(result.code===0){
      const categorys = result.data
      commit (RECEIVE_CATEGORYS,{categorys})
    }
  }, async getBrands({commit}){
    const result = await reqBrands()
    if(result.code===0){
      const allbrands = result.data
      commit (RCEIVE_ALLBRANDS,{allbrands})
    }
  }

}

