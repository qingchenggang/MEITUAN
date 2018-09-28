<template>

    <div class="two" :class="{'animated':isA,'slideInRight':isB,'slideInLeft':isC}">
      <router-link :to="{name:'lifeDetail',params:{lifeid:list.id}}" class="box" v-for="(list,index) in lists" :key="index" tag="div">
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
  import {reqlifetodos} from "../../api";
    export default {
        name: "two",
      data(){
        return{
          isA:true,
          isB:true,
          isC:false,
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
        const result=await reqlifetodos()
        this.lists = result
        //console.log(result)
      }
    }
</script>

<style scoped>
  .two{
    width: 100%;
    height: auto;
    margin-top: 6px;
    /* background-color: red;*/
    animation-duration:.2s;
  }
  .box{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #d7d7d7;
  }
  .box img{
    width: 120px;
    height: 80px;
    margin-left: 9px;
    margin-top: 9px;
    float: left;
  }
  .text{
    float: left;
  }
  .text h4{
    width: 11rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    display: inline-block;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }
  .text p:nth-child(2){
    width: 11rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #666;
  }
</style>
