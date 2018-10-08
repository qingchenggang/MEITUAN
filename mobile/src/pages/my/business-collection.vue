<template>
  <div>
    <router-link :to="{name:'meishiDetail',params:{meishiid:list.id}}" class="list" v-for="(list,index) in lists"  tag="div">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p>{{list.address}}</p>
      </div>
    </router-link>
    <router-link :to="{name:'lifeDetail',params:{lifeid:list.id}}" class="list" v-for="(list,index) in lists1"  tag="div">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p>{{list.address}}</p>
      </div>
    </router-link>
    <router-link :to="{name:'playdetail',params:{playid:list.id}}" class="list" v-for="(list,index) in lists2"  tag="div">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p>{{list.address}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "business-collection",
        data(){
            return{
              lists:[],
              lists1:[],
              lists2:[],
            }
        },
      created(){
        this.lists = JSON.parse(localStorage.getItem('zhuangtai')),
        this.lists1 = JSON.parse(localStorage.getItem('zhuangtai1')),
        this.lists2 = JSON.parse(localStorage.getItem('zhuangtai2'))
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .list{
    width: 100%;
    height: 90px;
    background-color: white;
  }
  .list img{
    width: 120px;
    height: 70px;
    margin-left: 9px;
    margin-top: 11px;
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
