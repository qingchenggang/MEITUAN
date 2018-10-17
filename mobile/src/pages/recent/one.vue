<template>

      <div class="one animated" :class="{'slideInLeft':isB}">
        <router-link :to="{name:'meishiDetail',params:{meishiid:list.id}}" class="box" v-for="(list,index) in lists" :key="index" tag="div">
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
  import {reqmeitodos} from "../../api";
    export default {
        name: "one",
      data(){
        return{
          isA:true,
          isB:false,
          lists:[]
      }
      },
      async mounted(){
        let hh=this.$route.query.haha;
        if(hh==false){
          this.isB=true
        }
        const result=await reqmeitodos()
        this.lists = result
      },
      watch: {
        '$route'(to, from) {
         /* console.log(to.name)
          console.log(from.name)*/
        if (to.query.id){
            this.id = to.query.id
          } else{
            this.id = 1;
          }
        }
      }

    }
</script>

<style scoped>
  .one{
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
    width:11rem;
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
