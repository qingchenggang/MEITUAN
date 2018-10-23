<template>

    <div class="three animated slideInRight">
      <router-link :to="{name:'playdetail',params:{playid:list.id}}" class="box" v-for="(list,index) in lists" :key="index" tag="div">
        <img :src="list.img" alt="">
        <div class="text">
          <h4>{{list.name}}</h4>
          <p>{{list.address}}</p>
        </div>
      </router-link>
      <div style="margin-bottom: 56px;"> </div>
    </div>

</template>

<script>
  import {reqplaytodos} from "../../api";
    export default {
        name: "three",
      data(){
          return{
            lists:[]
          }
      },
      async mounted(){
        let hh=this.$route.query.haha;
        //console.log(hh)
        if(hh==false){
          this.isB=false
          this.isC=true
        }
        const result=await reqplaytodos()
        this.lists = result
        //console.log(result)
      }
    }
</script>

<style scoped>
  .three{
    width: 100%;
    height: auto;
    margin-top: 6px;
    /* background-color: red;*/
    animation-duration:.2s;
  }
  .box{
    width: 92%;
    height: 100px;
    margin-left: 15px;
    border-bottom: 1px solid #d7d7d7;
  }
  .box img{
    width: 45%;
    height: 80px;
    margin-top: 9px;
    float: left;
  }
  .text{
    float: left;
    width: 55%;
    margin-top: 10px;
  }
  .text h4{
    width:9rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    display: inline-block;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }
  .text p:nth-child(2){
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #666;
  }
</style>
