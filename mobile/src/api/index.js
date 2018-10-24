/*
包含n个接口请求函数的模块
*/
import ajax from "./ajax"
const BASE_URL='http://localhost:3000'
//1.获取轮播图数据
export const reqbroadcast=()=>ajax(BASE_URL+'/broadcast')
//2.获取home页面中middle的页面数据
export const reqtodos=()=>ajax(BASE_URL+'/todos')
//3.获取当前城市的地址数据
export const reqaddress=(geohash)=>ajax(`${BASE_URL}/longitude/${geohash}`)
//4.获取登录的账号密码
export const reqaccountpassword=()=>ajax(BASE_URL+'/accountpassword')
//5.获取附近页面中享美食的商家数据值
export const reqmeitodos=()=>ajax(BASE_URL+'/meitodos')
//6.获取附近页面中惠生活的商家数据值
export const reqlifetodos=()=>ajax(BASE_URL+'/lifetodos')
//7.获取附近页面中爱玩乐的商家数据值
export const reqplaytodos=()=>ajax(BASE_URL+'/playtodos')
//8.获取附近页面中享美食的商家详细的数据值
export const reqmeishidetail=()=>ajax(BASE_URL+'/meishidetail')
//9.获取附近页面中享美食的商家详细的数据值
export const reqlifedetail=()=>ajax(BASE_URL+'/lifedetail')
//10.获取附近页面中爱运动的商家详细的数据值
export const reqplaydetail=()=>ajax(BASE_URL+'/playdetail')
//11.首页猜你喜欢数据
export const reqguess=()=>ajax(BASE_URL+'/guess')
//12.首页猜你喜欢详情数据
export const reqguessdetail=()=>ajax(BASE_URL+'/guessdetail')
//13.电影数据
export const reqmovie=()=>ajax(BASE_URL+'/movie')
//13.电影院数据
export const reqcinema=()=>ajax(BASE_URL+'/cinema')
