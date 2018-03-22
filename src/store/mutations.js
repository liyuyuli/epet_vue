
import{
  RECEIVE_CATEGORYS,
  RECEIVE_HOMEPAGE,
  RCEIVE_ALLBRANDS
} from './mutation-types'

export default {
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_HOMEPAGE](state,{menus}){
    state.menus = menus
  },
  [RCEIVE_ALLBRANDS](state,{allbrands}){
    state.allbrands = allbrands
  }
}

