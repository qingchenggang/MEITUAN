<template>
    <div id="moviedetail">
      <div class="header">
        <div class="scan">
          <span @click="scan">&#xe629;</span>
        </div>
        <div class="search_input">
            <p>上映影院与购票</p>
        </div>
        <i class="search iconfont" @click="search">&#xe623;</i>
      </div>
      <div class="first">

          <div class="dd" v-for="(list,index) in lists" :key="index"  v-if="$route.params.movieid==list.id" :style="{backgroundImage: 'url(' + list.bgimg + ')' }">
            <img class="img" :src="list.img" alt="">
            <p>{{list.cname}}</p>
          </div>
      </div>
    </div>
</template>

<script>
  import {reqmovie} from "../../api";
    export default {
        name: "moviedetail",
        data(){
          return{
            lists:[]
          }
        },
        async mounted(){
          const result=await reqmovie()
          this.lists = result
           console.log(this.lists)
        },
      methods:{
        scan(){
          this.$router.go(-1)
        },
        search(){

        },
      }
    }
</script>

<style scoped>
  .header {
    width: 100%;
    border: 0.001px solid lightyellow;
    background-color: #ffffff;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0;
  }
  @font-face {
    font-family: 'iconfont';
    /* project id 766155 */
    src: url('//at.alicdn.com/t/font_766155_5wjx48ytc6f.eot');
    src: url('//at.alicdn.com/t/font_766155_5wjx48ytc6f.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_766155_5wjx48ytc6f.woff') format('woff'), url('//at.alicdn.com/t/font_766155_5wjx48ytc6f.ttf') format('truetype'), url('//at.alicdn.com/t/font_766155_5wjx48ytc6f.svg#iconfont') format('svg');
  }
  .scan {
    width: 60px;
    height: 61px;
    /*border: 1px solid red;*/
    float: left;
    text-align: center;
  }
  .scan span {
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 61px;
    font-family: 'iconfont';
    font-size: 25px;
    text-align: center;
    color: #24b7ab;
  }
  .search_input {
    width: auto;
    height: 40px;
    float: left;
    margin-top: 10px;
    margin-left: 70px;
    /* background-color: #f4f4f4; */
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 40px;
  }
  .search {
    width: 40px;
    height: auto;
    text-align: center;
    /*border: 1px solid black;*/
    float: left;
    line-height: 63px;
    margin-left: 90px;
    color: #24b7ab;
    font-size: 20px;
  }
  .first{
    width: 100%;
    height: 500px;
    margin-top: 60px;

  }
.dd{
  width: 100%;
  height: 200px;
  background-repeat:  no-repeat;
  background-size: 100% 200px;
}
  .img{
    width: 90px;
    height: 120px;
    border: 1px solid white;
    margin-left: 10px;
    margin-top: 15px;
  }

</style>
