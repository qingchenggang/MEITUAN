<template>
  <div id="middle">
    <div class="first">
      <div class="one">
        <div>
          <i class="iconfont food">&#xe6a4;</i>
          <p>优惠团购</p>
        </div>
        <div>
          <i class="iconfont movie">&#xe645;</i>
          <p>附近好券</p>
        </div>
        <div>
          <i class="iconfont hotel">&#xe625;</i>
          <p>预约订座</p>
        </div>
        <div>
          <i class="iconfont play">&#xe67b;</i>
          <p>新店特惠</p>
        </div>
        <div>
          <i class="iconfont take">&#xe809;</i>
          <p>外卖</p>
        </div>
      </div>
      <div class="two">
        <div>
          <i class="iconfont ktv">&#xe644;</i>
          <p>下午茶</p>
        </div>
        <div>
          <i class="iconfont apartment">&#xe61b;</i>
          <p>1元拼团</p>
        </div>
        <div>
          <i class="iconfont travel">&#xe60a;</i>
          <p>工作餐</p>
        </div>
        <div>
          <i class="iconfont plane">&#xe640;</i>
          <p>火锅</p>
        </div>
        <div>
          <i class="iconfont massage">&#xe649;</i>
          <p>小吃快餐</p>
        </div>
      </div>
      <div class="three">
        <div>
          <i class="iconfont scenic">&#xe60c;</i>
          <p>自助餐</p>
        </div>
        <div>
          <i class="iconfont hair ">&#xe624;</i>
          <p>川湘菜</p>
        </div>
        <div>
          <i class="iconfont flashover">&#xe658;</i>
          <p>西餐</p>
        </div>
        <div>
          <i class="iconfont fashion">&#xe671;</i>
          <p>江浙菜</p>
        </div>
        <div>
          <i class="iconfont all">&#xe6c5;</i>
          <p>排行榜</p>
        </div>
      </div>
    </div>
    <div class="second">
        <div>
          <img src="../../../static/images/5.jpg" alt="">
          <img src="../../../static/images/6.jpg" alt="">
        </div>
    </div>

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
    color: #fe816f;
    font-size: 3rem;
  }
  .movie{
    color: #ff7934;
    font-size: 3rem;
  }
  .hotel{
    color: #a2d751;
    font-size: 3rem;
   }
  .play{
    color: #ff7f6f;
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
    color: #ffab34;
    font-size: 2rem;
  }
  .apartment{
    color: #ffab34;
    font-size: 2rem;
  }
  .travel{
    color: #ffab34;
    font-size: 2rem;
  }
  .plane{
    color: #ffab34;
    font-size: 2rem;
  }
  .massage{
    color: #ffab34;
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
    color: #ffab34;
    font-size: 2rem;
  }
  .hair{
    color: #ffab34;
    font-size: 2rem;
  }
  .flashover{
    color: #ffab34;
    font-size: 2rem;
  }
  .fashion{
    color: #ffab34;
    font-size: 2rem;
  }
  .all{
    color: #ffab34;
    font-size: 2rem;
  }
  .second{
    width: 100%;

    background-color: white;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .second div{
    width: 94%;

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
