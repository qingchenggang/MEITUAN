import { RECEIVE_ADDRESS,RECEIVE_MEITODOS } from './mutation-types'
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_MEITODOS](state,{meitodos}){
    state.meitodos=meitodos
  },
  add(state){
    state.count+=10;
  },
  reduce(state){
    if(state.count>1||state.count==1){
      state.count-=5;
    }
  }
}


