<template>

      <div class="one animated" :class="{'slideInLeft':isB}">
        <router-link :to="{name:'meishiDetail',params:{meishiid:list.id}}" class="box" v-for="(list,index) in lists" :key="index" tag="div">
          <img :src="list.img" alt="">
          <div class="text">
            <h4>{{list.name}}</h4>
            <p>{{list.address}}</p>
          </div>
        </router-link>
        <div style="height: 56px;"> </div>
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
