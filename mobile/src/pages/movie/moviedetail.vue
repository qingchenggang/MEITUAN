<template>
    <div id="moviedetail">
      <div class="header">
        <div class="scan">
          <span @click="scan">&#xe629;</span>
        </div>
        <div class="search_input">
            <p>上映影院与购票</p>
        </div>
        <i class="search iconfont" @click="search">&#xe619;</i>
      </div>
      <div class="first">
          <div class="dd" v-for="(list,index) in lists" :key="index"  v-if="$route.params.movieid==list.id" :style="{backgroundImage: 'url(' + list.bgimg + ')' }">
            <img class="img" :src="list.img" alt="">
            <div class="text">
              <p class="cname">{{list.cname}}</p>
              <p class="ename">{{list.ename}}</p>
              <p class="cat">猫眼观众评分</p>
              <p class="score">{{list.score}}</p>
              <p class="type">{{list.type}}</p>
              <p class="adress">{{list.adress}}</p>
              <p class="time">{{list.time}}</p>
            </div>
            <div class="zuo">
              <p> > </p>
            </div>
            <div class="first-footer">
              <div class="want"><i class="iconfont">&#xe61a;</i>&nbsp;想看</div>
              <div class="getscore"><i class="iconfont">&#xe646;</i>&nbsp;评分</div>
            </div>

          </div>
      </div>
      <div class="second">
        <div class="timexuan">
          <div class="timexuandiv">
            <div @click="today" :class="{'isColor':isa}">
              <p ><span>今天</span><span class="today"></span></p>
            </div>
            <div @click="tomorrow" :class="{'isColor':isb}">
              <p ><span>明天</span><span class="tomorrow"></span></p>
            </div>
            <div @click="aftertomorrow" :class="{'isColor':isc}">
              <p ><span class="houtian"></span><span class="aftertomorrow"></span></p>
            </div>
            <div @click="after2tomorrow" :class="{'isColor':isd}">
              <p ><span class="waitian"></span><span class="after2tomorrow"></span></p>
            </div>
            <div @click="anther" :class="{'isColor':ise}">
              <p ><span class="anther"></span></p>
            </div>
          </div>

        </div>
        <div class="title">
          <div class="title-div">
            <p>全城 <i class="iconfont">&#xe665;</i></p>
          </div>
          <div class="title-div">
            <p>品牌 <i class="iconfont">&#xe665;</i></p>
          </div>
          <div class="title-div">
            <p>距离近 <i class="iconfont">&#xe665;</i></p>
          </div>
          <div class="title-div over">
            <p>筛选 <i class="iconfont">&#xe665;</i></p>
          </div>
        </div>
        <div>
          <div v-for="(list,index) in add" :key="index">
            <p>{{list.ad}}</p>
          </div>
        </div>
        <movietoday v-show="isA"></movietoday>
        <movietomorrow  v-show="isB"></movietomorrow>
        <movieaftertomorrow  v-show="isC"></movieaftertomorrow>
        <movieafter2tomorrow  v-show="isD"></movieafter2tomorrow>
        <movieanther  v-show="isE"></movieanther >
      </div>

    </div>
</template>

<script>
  import {reqmovie} from "../../api";
  import movietoday from './movietoday'
  import movietomorrow from './movietomorrow'
  import movieaftertomorrow from './movieaftertomorrow'
  import movieafter2tomorrow from './movieafter2tomorrow'
  import movieanther from './movieanther'
    export default {
        name: "moviedetail",
        data(){
          return{
            lists:[],
            add:[],
            isA:true,
            isB:false,
            isC:false,
            isD:false,
            isE:false,
            isa:true,
            isb:false,
            isc:false,
            isd:false,
            ise:false
          }
        },
        async mounted(){
          const result=await reqmovie()
          this.lists = result
          var now = new Date(); //当前日期
          var nowMonth = now.getMonth()+1; //当前月
          var nowDay = now.getDate(); //当前日
          var nowYear = now.getFullYear(); //当前年
          var today=nowMonth+'月'+nowDay+'日'
          var tomorrow=nowMonth+'月'+(nowDay+1)+'日'
          var aftertomorrow=nowMonth+'月'+(nowDay+2)+'日'
          var after2tomorrow=nowMonth+'月'+(nowDay+3)+'日'
          var anther=nowMonth+'月'+(nowDay+4)+'日'
          $(".today").html(today)
          $(".tomorrow").html(tomorrow)
          $(".aftertomorrow").html(aftertomorrow)
          $(".after2tomorrow").html(after2tomorrow)
          $(".anther").html(anther)
          var date=nowYear+'-'+nowMonth+'-'+nowDay
          var dateString = date;//当前日期 xxxx-xx-xx
          var dateObject = new Date(dateString);
          dateObject.getDay()//返回值是 0（周日） 到 6（周六） 之间的一个整数。
          if(dateObject.getDay()==0){
            $(".houtian").html('周二')
            $(".waitian").html('周三')
          }else if(dateObject.getDay()==1){
            $(".houtian").html('周三')
            $(".waitian").html('周四')
          }else if(dateObject.getDay()==2){
            $(".houtian").html('周四')
            $(".waitian").html('周五')
          }else if(dateObject.getDay()==3){
            $(".houtian").html('周五')
            $(".waitian").html('周六')
          }else if(dateObject.getDay()==4){
            $(".houtian").html('周六')
            $(".waitian").html('周天')
          }else if(dateObject.getDay()==5){
            $(".houtian").html('周天')
            $(".waitian").html('周一')
          }else if(dateObject.getDay()==6){
            $(".houtian").html('周一')
            $(".waitian").html('周二')
          }
         // alert(today)
        },
        components: {
          movietoday,
          movietomorrow,
          movieaftertomorrow,
          movieafter2tomorrow,
          movieanther
        },
        methods:{
          scan(){
            this.$router.go(-1)
          },
          search(){

          },
          today(){
              this.isA=true,
              this.isB=false,
              this.isC=false,
              this.isD=false,
              this.isE=false,
              this.isa=true,
              this.isb=false,
              this.isc=false,
              this.isd=false,
              this.ise=false
          },
          tomorrow(){
              this.isA=false,
              this.isB=true,
              this.isC=false,
              this.isD=false,
              this.isE=false,
              this.isa=false,
              this.isb=true,
              this.isc=false,
              this.isd=false,
              this.ise=false
          },
          aftertomorrow(){
              this.isA=false,
              this.isB=false,
              this.isC=true,
              this.isD=false,
              this.isE=false,
              this.isa=false,
              this.isb=false,
              this.isc=true,
              this.isd=false,
              this.ise=false
          },
          after2tomorrow(){
              this.isA=false,
              this.isB=false,
              this.isC=false,
              this.isD=true,
              this.isE=false,
              this.isa=false,
              this.isb=false,
              this.isc=false,
              this.isd=true,
              this.ise=false
          },
          anther(){
              this.isA=false,
              this.isB=false,
              this.isC=false,
              this.isD=false,
              this.isE=true,
              this.isa=false,
              this.isb=false,
              this.isc=false,
              this.isd=false,
              this.ise=true
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
    margin-left: 4rem;
    /* background-color: #f4f4f4; */
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 40px;
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
  .first{
    width: 100%;
    height: 210px;
    margin-top: 60px;

  }
  .dd{
  width: 100%;
  height: 210px;
  background-repeat:  no-repeat;
  background-size: 100% 210px;
}
  .img{
    width: 110px;
    height: 150px;
    border: 1px solid white;
    margin-left: 19px;
    margin-top: 15px;
    float: left;
  }
  .text{
    float: left;
    width: 150px;
    height: 150px;
    margin-top: 15px;
    margin-left: 15px;
  }
  .cname{
    color: #dff1f5;
  }
  .ename{
    color: #dff1f5;
    font-size: 11px;
  }
  .cat{
    color: #dff1f5;
    font-size: 11px;
    margin-top: 5px;
  }
  .score{
    color: #eb9919;
    margin-top: 2px;
  }
  .type{
    color: #dff1f5;
    font-size: 11px;
    margin-top: 5px;
  }
  .adress{
    color: #dff1f5;
    font-size: 11px;
    margin-top: 5px;
  }
  .time{
    color: #dff1f5;
    font-size: 11px;
    margin-top: 5px;
  }
  .zuo{
    color: #dff1f5;
    padding-top: 75px;
    float: right;
    margin-right: 20px;
    font-size: 25px;
  }
  .first-footer{
    clear: both;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .want{
    width: 150px;
    height: 25px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    text-align: center;
    margin-top: 10px;
  }
  .want i{
    color: #c8534c;
  }
  .getscore{
    width: 150px;
    height: 25px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    text-align: center;
    margin-top: 10px;
  }
  .getscore i{
    color: #dca15b;
  }
  .second{
    width: 100%;
    background-color: white;
  }
  .timexuan{
    width: 100%;
    height: 35px;
    clear: both;
    line-height: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    overflow-x: auto;

  }
  .timexuandiv{
    width: 100%;
    margin-left: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .timexuan div:nth-child(1) p{
  /*  border: 1px solid red;*/
    width: 100px;
    text-align: center;
  }
  .timexuan div:nth-child(2) p{
   /* border: 1px solid red;*/
    width: 100px;
    margin-left: 20px;
    text-align: center;
  }
  .timexuan div:nth-child(3) p{
   /* border: 1px solid red;*/
    width: 100px;
    margin-left: 20px;
    text-align: center;
  }
  .timexuan div:nth-child(4) p{
   /* border: 1px solid red;*/
    width: 100px;
    margin-left: 20px;
    text-align: center;
  }
  .timexuan div:nth-child(5) p{
    /*border: 1px solid red;*/
    width: 100px;
    margin-left: 20px;
    text-align: center;
  }
  .title{
    width: 100%;
    height: 35px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid #f0ecec;
    border-right: 0;
    border-left:0 ;
  }
  .title-div{
    width: 100px;
    height: 20px;
    border-right: 1px solid #e5e4e4;
    text-align: center;
    line-height: 20px;
    margin-top: 8px;
    color: #6a6a6a;
    font-size: 13px;
  }
  .title-div i{
    font-size: 1px;
    color: #6a6a6a;
  }
  .over{
    border: 0;
  }
  .isColor{
    color: #24b7ab;
  }
</style>
