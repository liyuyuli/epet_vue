//触发mutation调用间接更新状态的对象
  import {
    reqShopNav,
    reqCategorys,
    reqAllBrands,
    reqBrand
  } from "../api";

import {
  RECEIVE_CATEGORYS,
  RECEIVE_HOMEPAGE,
  RCEIVE_ALLBRANDS,
  RECEIVE_BRAND
}
  from './mutation-types'

export default {
  async getShopNav({commit},callback){
    const result = await reqShopNav()
    if(result.code===0){
      commit (RECEIVE_HOMEPAGE,{homepages:result.data})
      callback&&callback()
    }
  },
 async getCategorys({commit},cb){
    const result = await reqCategorys()
    if(result.code===0){
      const categorys = result.data
      commit (RECEIVE_CATEGORYS,{categorys:result.data})
      cb&&cb()
    }
  },
  async getBrand({commit},cb){
    const result = await reqBrand()
    if(result.code===0){
      const brand = result.data
      commit (RECEIVE_BRAND,{brand:result.data})
      cb&&cb();
    }

  },
  async getAllBrands({commit}){
    const result = await reqAllBrands()
    if(result.code===0){
      const allbrands = result.data
      commit (RCEIVE_ALLBRANDS,{allbrands:result.data})
    }
  }

}

