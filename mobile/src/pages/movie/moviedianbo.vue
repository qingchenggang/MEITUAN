<template>
    <div id="moviedianbo">
      <div class="header">
        <div class="scan">
          <span @click="scan">&#xe629;</span>
        </div>
        <div class="search_input" v-for="(list,index) in lists" :key="index" v-if="$route.params.dianboid==list.id" >
          <p>{{list.name}}</p>
        </div>
      </div>
      <div v-for="(list,index) in lists" :key="index" v-if="$route.params.dianboid==list.id">
        <img :src="list.img" alt="" class="title_img">
        <div class="dizhi_div">
          <div class="dizhi">&#xe6d9;</div><div class="dizhi_add">{{list.address}}</div><div class="dnumber">&#xe60f;</div>
        </div>
        <div class="footer">
          <p class="tao">点播套餐</p>
          <div v-for="(list,index) in dizhi" :key="index" class="footer_div">
            <img :src="list.img" alt="" class="small_img">
            <span class="small_name">{{list.name}}</span>
            <span class="small_price">{{list.price}}</span>
            <span class="buy">购买</span>
          </div>
        </div>
        <div class="description">
          <p class="description_p">片源说明</p>
          <div class="last_div">
              <p>该点播影院拥有多部影片放映版权，您可致电咨询具体影片</p>
          </div>
        </div>



      </div>

    </div>
</template>

<script>
    import {reqdianCinema} from "../../api";
    export default {
        name: "moviedianbo",
        data(){
            return{
                lists:[],
                dizhi:[]
            }
        },
      async mounted(){
        const result=await reqdianCinema()
        this.lists = result
        var as=this.$route.params.dianboid//当前页面数据下标
        //console.log(this.lists[as-1].aftertomorrow)
        this.dizhi=this.lists[as-1].package


      },
      created(){

      /*  var a=JSON.parse(localStorage.getItem('dianbo'))
        console.log(a.package)
        this.lists=JSON.parse(localStorage.getItem('dianbo'));*/
      },
      methods:{
        scan(){
          this.$router.push({
            path:"/movieTwo"
          })
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
    width: 200px;
    height: 60px;
    float: left;
    margin-left: 2rem;
    /* background-color: #f4f4f4; */
    border-radius: 5px;
    display: flex;
    justify-content: center;
    line-height: 60px;
    font-size: 16px;
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
  .title_img{
    width: 100%;
    height: 200px;
    margin-top: 64px;
  }
  .dizhi{
    font-family: 'iconfont';
    display: inline-block;
     margin-left: 10px;
    line-height: 50px;
    color: #03A9F4;
  }
  .dizhi_div{
    width: 100%;
    display: flex;
    height: 50px;
    background-color: white;
  }
  .dizhi_add{
    width: 250px;
    margin-left: 20px;
    margin-top: 10px;
  }
  .dnumber{
    font-family: 'iconfont';
    width: 50px;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 19px;
    border-left: 1px solid #eee6e6;
    color: #03A9F4;
    text-align: center;
    margin-left: 28px;
  }
  .footer{
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 10px;
  }
  .tao{
    width: 97.5%;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    border-bottom: 1px solid #eee6e6;
  }

  .small_img{
    width: 80px;
    height: 70px;
    margin-top: 9px;
    margin-left: 10px;
    float: left;
  }
  .footer_div{
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #eee6e6;
  }
  .small_name{
    width: 200px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 20px;
    margin-top: 15px;
  }
  .small_price{
    width: 100px;
    display: inline-block;
    margin-left: 20px;
    margin-top: 15px;
    color: #24b7ab;
  }
  .buy{
    display: inline-block;
    width: 45px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 3px;
    margin-left: 100px;
    color: red;
    border: 1px solid red;
  }
  .description{
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 10px;
  }
  .description_p{
    width: 97.5%;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    border-bottom: 1px solid #eee6e6;
  }
  .last_div{
    width: 100%;
    height: 45px;
    background-color: white;
  }
  .last_div p{
    width: 360px;
    margin-left: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
