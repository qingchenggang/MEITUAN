<template>
  <div id="middle">
    <div class="first">
      <div class="one">
        <div>
          <i class="iconfont food" @click="food">&#xe602;</i>
          <p>美食</p>
        </div>
        <div>
          <i class="iconfont movie" @click="movie">&#xe601;</i>
          <p>电影/演出</p>
        </div>
        <div>
          <i class="iconfont hotel">&#xe67a;</i>
          <p>酒店/住宿</p>
        </div>
        <div>
          <i class="iconfont play">&#xe604;</i>
          <p>休闲娱乐</p>
        </div>
        <div>
          <i class="iconfont take">&#xe809;</i>
          <p>外卖</p>
        </div>
      </div>
      <div class="two">
        <div>
          <i class="iconfont ktv">&#xe633;</i>
          <p>ktv</p>
        </div>
        <div>
          <i class="iconfont apartment">&#xe60b;</i>
          <p>名宿/公寓</p>
        </div>
        <div>
          <i class="iconfont travel">&#xe659;</i>
          <p>周边游旅游</p>
        </div>
        <div>
          <i class="iconfont plane">&#xe616;</i>
          <p>机票火车票</p>
        </div>
        <div>
          <i class="iconfont massage">&#xe609;</i>
          <p>按摩/足疗</p>
        </div>
      </div>
      <div class="three">
        <div>
          <i class="iconfont scenic">&#xe62a;</i>
          <p>景点/门票</p>
        </div>
        <div>
          <i class="iconfont hair ">&#xe600;</i>
          <p>丽人/美发</p>
        </div>
        <div>
          <i class="iconfont flashover">&#xe606;</i>
          <p>闪购超市</p>
        </div>
        <div>
          <i class="iconfont fashion">&#xe607;</i>
          <p>时尚购</p>
        </div>
        <div>
          <i class="iconfont all">&#xe605;</i>
          <p>全部分类</p>
        </div>
      </div>
    </div>
    <div class="second">
        <div>
          <img src="../../../static/images/home/one.png" alt="">
          <img src="../../../static/images/home/two.png" alt="">
          <img src="../../../static/images/home/three.png" alt="">
          <img src="../../../static/images/home/four.png" alt="">
        </div>
    </div>
    <img class="banner" src="../../../static/images/home/banner.png" alt="">
  <!--  <div style="height: 56px;"> </div>-->
  </div>

</template>

<script>
	export default {
    name:'middle',
		data() {
			return {
				lists:[]
			}
		},
    methods:{
      food(){
        this.$router.push('/meishihome')
      },
      movie(){
        this.$router.push('/movieHome')
      }
    }


  }
</script>

<style scoped>
  #middle{
    width: 100%;
    height: auto;
  }
  .first{
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: white;
  }
  .one{
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
  .one div{
    width: 20%;
    text-align: center;
  }
  .one p{
    font-size: 12.5px;
  }

  .food{
    color: #ff7e2a;
    font-size: 3rem;
  }
  .movie{
    color: #f74940;
    font-size: 3rem;
  }
  .hotel{
    color: #915634;
    font-size: 3rem;
   }
  .play{
    color: #00ba9b;
    font-size: 3rem;
  }
  .take{
    color: #fcaf01;
    font-size: 3rem;
  }
  .two{
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
  .two div{
    width: 20%;
    text-align: center;
  }
  .two p{
    font-size: 12.5px;
  }
  .ktv{
    color: #15c5b0;
    font-size: 2rem;
  }
  .apartment{
    color: #febd3d;
    font-size: 2rem;
  }
  .travel{
    color: #34a9ff;
    font-size: 2rem;
  }
  .plane{
    color: #33a4ff;
    font-size: 2rem;
  }
  .massage{
    color: #1ed4bb;
    font-size: 2rem;
  }
  .three{
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
  .three div{
    width: 20%;
    text-align: center;
  }
  .three p{
    font-size: 12.5px;
  }
  .scenic{
    color: #53aefd;
    font-size: 2rem;
  }
  .hair{
    color: #df7f8b;
    font-size: 2rem;
  }
  .flashover{
    color: #ffbd00;
    font-size: 2rem;
  }
  .fashion{
    color: #976bf4;
    font-size: 2rem;
  }
  .all{
    color: #976bf4;
    font-size: 2rem;
  }
  .second{
    width: 100%;
    height: 240px;
    background-color: white;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .second div{
    width: 94%;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 9px;
  }
  .second div img{
    width:48%;
    height: 100px;
    margin-top: 7px;
  }
  .banner{
    width: 100%;
    margin-top: 10px;
  }
</style>
