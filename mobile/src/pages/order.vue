<template>
  <div id="order">
    <div class="title">
        <p>我的订单</p>
    </div>
    <div class="header">
      <div class="one">
        <i class="iconfont">&#xe620;</i>
        <p>待付款</p>
      </div>
      <div class="two">
        <i class="iconfont">&#xe643;</i>
        <p>待使用</p>
      </div>
      <div class="three">
        <i class="iconfont">&#xe634;</i>
        <p>待评价</p>
      </div>
      <div class="four">
        <i class="iconfont">&#xe64c;</i>
        <p>退款/售后</p>
      </div>
      <div class="five">
        <i class="iconfont">&#xe621;</i>
        <p>全部订单</p>
      </div>
    </div>
  </div>
<!--	<div>
		订单
    <p> {{count}}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
	</div>-->
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name:'order',
    data(){
      return{

      }
    },
    methods:{

      ...mapMutations(['add', 'reduce']),
    },
    computed: {
      ...mapState(['count'])

    },
    watch:{

    }

  }
</script>

<style scoped>
  .title{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    /* background-color: white; */
    font-size: 15px;
    font-weight: bold;
  }
  .header{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    margin-top: 5px;
  }
  .header i{
    color: #fe9901;
    font-size: 25px;
  }

</style>
