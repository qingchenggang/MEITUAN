<template>
    <div id="last">
     <div class="one">
        <p>- 猜你喜欢 -</p>
      </div>
      <div class="two">
        <router-link :to="{name:'lastDetail',params:{lastid:list.id}}" class="box" v-for="(list,index) in lists" :key="index" tag="div">
          <img :src="list.img" alt="">
          <div class="text">
            <h4>{{list.name}}</h4>
            <p class="already">{{list.already}}</p>
            <p>{{list.address}}</p>
            <p>{{list.money}}</p>
          </div>
        </router-link>
      </div>
     <!-- <div style="height: 56px;"> </div>-->
    </div>
</template>

<script>
  import {reqguess} from "../../api";
  import axios from 'axios'
    export default {
        name: "last",
        data(){
            return{
            lists:[],
          }
        },
      mounted(){
        axios.get('http://192.168.0.149:3002/guess').then(res => {
         // console.log(res.data)
          this.lists = res.data
          //console.log(this.products)
        }, err => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  #last{
    width: 100%;
    height: auto;
  }
  .one{
    width: 100%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin-top: 6px;
    border-bottom: 1px solid #f1dbdb45;
    color: #0000004f;
    background-color: white;
  }
  .two{
    width: 100%;
    height: auto;
    background-color: white;
  }
  .box{
    width: 92%;
    height: 100px;
    margin-left: 15px;
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
  .text p:nth-child(3){
    width: 12rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #666;
  }
  .text p:nth-child(4){
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
  .already{
    margin-left: 70%;
    margin-top: -25px;
    color: #666;
    font-size: 12px;
  }
</style>
