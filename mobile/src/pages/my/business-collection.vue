<template>
  <div>
    <div class="list" v-for="(list,index) in lists" :key="index">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p>{{list.address}}</p>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "business-collection",
        data(){
            return{
              lists:[]
            }
        },
      created(){
        this.lists = JSON.parse(localStorage.getItem('zhuangtai'))
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
