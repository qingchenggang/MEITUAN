/*
通过mutation间接更新state的多个方法的对象
*/
import {RECEIVE_ADDRESS,RECEIVE_MEITODOS} from './mutation-types'
import { reqaddress,reqmeitodos } from "../api";

export default{
//异步获取地址
  async getaddress({commit,state}){
    //发生异步ajax请求
    const geohash='?id='+state.latitude+','+state.longitude
    const result=await reqaddress(geohash)
    //console.log(result)
    //提交一个mutation
    if(result.address.code===0){
      const address=result.address.address
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getid({commit}){
    //发生异步ajax请求

    const result=await reqmeitodos()
   // console.log(result)
    //提交一个mutation


    const meitodos=result
      commit(RECEIVE_MEITODOS,{meitodos})

  }
}
