
import{
  RECEIVE_CATEGORYS,
  RECEIVE_HOMEPAGE,
  RCEIVE_ALLBRANDS,
  RECEIVE_BRAND
} from './mutation-types'

export default {

  [RECEIVE_HOMEPAGE](state,{homepages}){
    state.homepages = homepages
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RCEIVE_ALLBRANDS](state,{allbrands}){
    state.allbrands = allbrands
  }
}

