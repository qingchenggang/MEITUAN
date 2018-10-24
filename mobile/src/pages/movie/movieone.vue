<template>
    <div id="movieone">
      <div>
        <mu-carousel hide-controls>
          <mu-carousel-item>
            <img v-lazy="carouselImg1">
          </mu-carousel-item>
          <mu-carousel-item>
            <img v-lazy="carouselImg2">
          </mu-carousel-item>
          <mu-carousel-item>
            <img v-lazy="carouselImg3">
          </mu-carousel-item>
          <mu-carousel-item>
            <img v-lazy="carouselImg4">
          </mu-carousel-item>
        </mu-carousel>
      </div>
      <div class="header">
        <div><img src="../../../static/images/movie/1.jpg" alt=""></div>
        <div><img src="../../../static/images/movie/2.jpg" alt=""></div>
        <div><img src="../../../static/images/movie/3.jpg" alt=""></div>
        <div><img src="../../../static/images/movie/4.jpg" alt=""></div>
      </div>
      <div>
        <div class="one">
          <p class="hot">热门影片</p>
          <p class="all">查看全部></p>
          <div class="main" >
            <router-link :to="{name:'movieDetail',params:{movieid:list.id}}" class="content" v-for="(list,index) in lists" :key="index" tag="div">
              <img :src="list.img" alt="">
              <p>{{list.score}}</p>
              <p>{{list.cname}}</p>
            </router-link>
          </div>
        </div>

      </div>
      <div class="footer">
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
        <div class="footer-div">
          <div class="footer-concent" v-for="(list,index) in lists1" :key="index">
            <div style="display: inline-block">
              <span class="addressname">{{list.name}}</span>
              <span class="distance">{{list.distance}}</span>
            </div>
            <p class="money">{{list.money}}</p>
            <div v-if="list.benefitconent!=''">
              <p class="hui">惠</p>
              <p class="huiconcent">无双{{list.benefitconent}}</p>
            </div>
            <div v-if="list.card!=''">
              <p class="ka">卡</p>
              <p class="kaconcent">{{list.card}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import carouselImg1 from '../../assets/images/movie/1.jpg';
  import carouselImg2 from '../../assets/images/movie/2.jpg';
  import carouselImg3 from '../../assets/images/movie/3.jpg';
  import carouselImg4 from '../../assets/images/movie/4.jpg';
  import {reqmovie} from "../../api";
  import {reqcinema} from "../../api";
    export default {
        name: "movieone",
        data(){
            return{
              carouselImg1,
              carouselImg2,
              carouselImg3,
              carouselImg4,
              lists:[],
              lists1:[]
          }
        },
      async mounted(){
        const result=await reqmovie()
        const result1=await reqcinema()
        this.lists = result
        this.lists1 = result1
       // console.log(this.lists1)
      }
    }
</script>

<style scoped>
  .header{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
  .header img{
    width: 80px;
}
  .mu-carousel {
  height: 100px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 60px;
}
  .mu-carousel-item>img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 100%;
  max-height: 100%;
  -webkit-transition: inherit;
  -o-transition: inherit;
  transition: inherit;
  will-change: transform;
  max-width: none;
}
  .mu-carousel-indicators {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 28px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 3;
}
  .hot{
    float: left;
    margin-left: 8px;
    margin-top: 5px;
    font-weight: bold;
  }
  .all{
    float: right;
    margin-right: 8px;
    margin-top: 5px;
    color: #a4a4a4;
    font-size: 12px;
  }
  .one{
    border-bottom: 1px solid #f7f0f0;
    background-color: white;
    height: 190px;
  }
  .main{
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: auto;
  }
  .content img{
    display: flex;
    width: 96px;
    height: 120px;
  }
  .content{
    margin-left: 8px;
    margin-top: 10px;
  }
  .content p:nth-child(2){
    margin-top: -15px;
    margin-left: 5px;
    color: #ff8f00;
    font-size: 10px;
  }
  .content p:nth-child(3){
  margin-top: 8px;
  font-weight: bold;
  font-size: 13px;
}
  .footer{
  width: 100%;
  background-color: white;
  margin-top: 10px;
}
  .title{
    width: 100%;
    height: 35px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;

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
  .over{
    border: 0;
  }
  .title-div i{
    font-size: 1px;
    color: #6a6a6a;
  }
  .footer-div{
    width: 100%;
  }
  .footer-concent{
    width: 100%;
    height: 110px;
    border-top: 1px solid #f7f0f0;
  }
  .footer-concent .addressname{
    width: 285px;
    margin-left: 13px;
    font-family: STHeiti;
    margin-top: 15px;
    display: inline-block;
  }
  .money{
    margin-left: 13px;
    color: #2bb79a;
    margin-top: 5px;
  }
  .hui{
    width: 15px;
    height: 15px;
    background-color: #f89a04;
    text-align: center;
    line-height: 15px;
    color: white;
    border-radius: 3px;
    font-size: 7px;
    margin-left: 13px;
    margin-top: 5px;
  }
  .huiconcent{
    margin-left: 30px;
    margin-top: -16px;
    color: #a4a4a4;
    font-size: 12px;
  }
  .ka{
    width: 15px;
    height: 15px;
    background-color: #72beef;
    text-align: center;
    line-height: 15px;
    color: white;
    border-radius: 3px;
    font-size: 7px;
    margin-left: 13px;
    margin-top: 5px;
  }
  .kaconcent{
    margin-left: 30px;
    margin-top: -16px;
    color: #a4a4a4;
    font-size: 12px;
  }
  .distance{
    margin-left: 20px;
    font-size: 12px;
    color: #a4a4a4;
  }
</style>
