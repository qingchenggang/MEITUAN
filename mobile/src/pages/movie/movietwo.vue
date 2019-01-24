<template>
    <div id="movietwo">
      <div class="dianbo">
        <div class="search_input">
          <span class="iconfont">&#xe623;</span><span>搜索可点播影片</span>
        </div>
      </div>
      <div class="one">
        <p class="hot">点击影片推荐</p>
        <div class="main" >
          <router-link :to="{name:'movieDetail',params:{movieid:list.id}}" class="content" v-for="(list,index) in lists" :key="index" tag="div">
            <img :src="list.img" alt="">
            <p>{{list.score}}</p>
            <p>{{list.cname}}</p>
          </router-link>
        </div>
      </div>
      <div class="center">
         <p><span>点击影片库</span><span>全部 ></span></p>
      </div>
      <div>
        <div class="dianboyin">
          <p>点播影院</p>
          <div class="two">
            <router-link :to="{name:'moviedianbo',params:{dianboid:list.id}}" class="box" v-for="(list,index) in lists1" :key="index" tag="div">
              <img :src="list.img" alt="">
              <div class="text">
                <h4>{{list.name}}</h4>
                <p>{{list.address}}</p>
                <p>{{list.price}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {reqdianCinema} from "../../api";
  import {reqmovie} from "../../api";
    export default {
        name: "movietwo",
        data(){
            return{
              lists:[],
              lists1:[]
          }
        },
        async mounted(){
          const result=await reqmovie()
          const result1=await reqdianCinema()
          this.lists = result
          this.lists1 = result1

          localStorage.setItem('dianbo', JSON.stringify(this.lists1));

        }
    }
</script>

<style scoped>
  .dianbo{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    margin-top: 62px;
    background-color: white;
    border-top: 1px solid #eae6e6;
    border-bottom:1px solid #eae6e6;
    display: flex;
    align-items: center;
  }
  .search_input{
    width: 300px;
    height: 30px;
    margin-left: 10px;
    background-color: #ffffff;
    border-radius: 20px;
    border: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c4c4c4;
  }
  .search_input input{
    width:280px;
    height: 28px;
    float: left;
    margin-left: 10px;
    background-color: #ffffff;
    border-radius: 20px;
    border: none;
    text-align:center;
  }
  .hot{
    float: left;
    margin-left: 8px;
    margin-top: 5px;
    font-weight: bold;
  }
  .all{
    float: right;
    margin-right: 8px;
    margin-top: 5px;
    color: #a4a4a4;
    font-size: 12px;
  }
  .one{
    border-bottom: 1px solid #f7f0f0;
    background-color: white;
    height: 190px;
  }
  .main{
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: auto;
  }
  .content img{
    display: flex;
    width: 96px;
    height: 120px;
  }
  .content{
    margin-left: 8px;
    margin-top: 10px;
  }
  .content p:nth-child(2){
    margin-top: -15px;
    margin-left: 5px;
    color: #ff8f00;
    font-size: 10px;
  }
  .content p:nth-child(3){
    margin-top: 8px;
    font-weight: bold;
    font-size: 13px;
  }
  .center{
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    margin-top: 10px;
    line-height: 50px;
  }
  .center span:nth-child(1){
    margin-left: 8px;
    font-weight: bold;
  }
  .center span:nth-child(2){
    margin-left: 245px;
    color: #a4a4a4;
  }
  .dianboyin{
    width: 100%;
    height: auto;
    margin-top: 10px;
    background-color: white;
  }
  .dianboyin p:nth-child(1){
    width: 97.6%;
    height: 40px;
    border-bottom: 1px solid #eae6e6;
    margin-left: 8px;
    line-height: 40px;
    font-weight: bold;
  }
  .two{
    width: 100%;
    height: auto;
    background-color: white;
  }
  .box{
    width: 97.6%;
    height: 100px;
    margin-left:8px;
    border-bottom: 1px solid #d7d7d7;
  }
  .box img{
    width: 30%;
    height: 70%;

    margin-top: 9px;
    float: left;
  }
  .text{
    float: left;
    width:69%;
    margin-top: 4px;
  }
  .text h4{
    width:10rem;
    margin-left: 10px;
    overflow:hidden;
    display: inline-block;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }
  .text p:nth-child(2){
    width: 12rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #666;
  }
  .text p:nth-child(3){
    width: 13rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 15px;
    font-weight: bold;
    color: #FF5722;
  }

</style>
