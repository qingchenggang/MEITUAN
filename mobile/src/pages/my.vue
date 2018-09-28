<template>
	<div id="my">
    <div  class="big" style="background-image: url('../../static/images/my/wode.png')">
     <div class="hearder1">
        <span class="set" @click="set">&#xe608;</span>
        <span class="artificial" @click="artificial">&#xe73b;</span>
        <span class="letter" @click="letter">&#xe60d;</span>
      </div>
     <div class="portrait" @click="portrait">
        <p> &#xe600;</p>
        <h4>独步颜良的大彬</h4>
       <p>fdsfsdfsdf</p>
      </div>
      <div class="first">
        <div  class="one">
          <div class="start">
            <img src="../../static/images/my/start.png" alt="">
            <p>收藏</p>
          </div>
          <div class="pingjia">
            <img src="../../static/images/my/pingjia.png" alt="">
            <p>评价</p>
          </div>
          <div class="liulan">
            <img src="../../static/images/my/liulan.png" alt="">
            <p>最近浏览</p>
          </div>

        </div>
      </div>
      <h5 class="title_one">美团钱包</h5>
      <div class="second">
          <div class="two">
            <div class="start1">
              <img src="../../static/images/my/wallet.png" alt="">
              <p>我的钱包</p>
            </div>
            <div class="start1">
              <img src="../../static/images/my/quan.png" alt="">
              <p>红包/卡券</p>
            </div>
            <div class="start1">
              <img src="../../static/images/my/pay.png" alt="">
              <p>闪付</p>
            </div>
            <div class="start1">
              <img src="../../static/images/my/jie.png" alt="">
              <p>借钱</p>
            </div>
            <div class="start1">
              <img src="../../static/images/my/card.png" alt="">
              <p>美团信用卡</p>
            </div>
            <div class="start1">
              <img src="../../static/images/my/financial.png" alt="">
              <p>理财</p>
            </div>
            <div class="start1">
              <img src="../../static/images/my/recharge.png" alt="">
              <p>手机充值</p>
            </div>
          </div>
      </div>
      <h5 class="title_two">美团服务</h5>
      <div class="third">
        <div class="three">
          <div class="start1">
            <img src="../../static/images/my/member.png" alt="">
            <p>会员中心</p>
          </div>
          <div class="start1">
            <img src="../../static/images/my/welfare.png" alt="">
            <p>美团公益</p>
          </div>
          <div class="start1">
            <img src="../../static/images/my/free.png" alt="">
            <p>免流量</p>
          </div>
          <div class="start1">
            <img src="../../static/images/my/invoice.png" alt="">
            <p>发票助手</p>
          </div>
          <div class="start1">
            <img src="../../static/images/my/cooperation.png" alt="">
            <p>我要合作</p>
          </div>
          <div class="start1">
            <img src="../../static/images/my/about.png" alt="">
            <p>关于美团</p>
          </div>
        </div>
      </div>

    </div>
    <div>

    </div>





	</div>

</template>

<script>

  export default {
    nme:'#my',
    data(){
      return{

      }
    },
      methods:{

        set(){

        },
        artificial(){

        },
        letter(){

        },
        portrait(){

        }

      },
    computed: {


    },
    watch:{

    }

  }
</script>

<style scoped>
#my{
  height: 100%;
  width: 100%;
}

  .big {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 854070 */
    src: url('//at.alicdn.com/t/font_854070_8yij2gwhjgo.eot');
    src: url('//at.alicdn.com/t/font_854070_8yij2gwhjgo.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_854070_8yij2gwhjgo.woff') format('woff'),
    url('//at.alicdn.com/t/font_854070_8yij2gwhjgo.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_854070_8yij2gwhjgo.svg#iconfont') format('svg');
  }
  .hearder1{
    width: 100%;
    height: 35px;
    overflow: hidden;
  }
  .set{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color: #ffffff;
    margin-left: 10px;
    font-size: 20px;
  }
  .artificial{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color: #ffffff;
    margin-left: 265px;
    font-size: 20px;
  }
  .letter{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color: #ffffff;
    margin-left: 20px;
    font-size: 20px;
  }
  .portrait{
    width: 100%;
    text-align: center;
  }
  .portrait p{
    font-family: 'iconfont';
    font-size: 45px;
    margin-top: 25px;
  }
  .first,.second,.third{
    width: 100%;
    text-align: -webkit-center;
  }
  .one{
    width: 90%;
    height: 60px;
    border-bottom: 1px solid #ecece7;
    margin-top: 30px;
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
  .start img{
    width: 25px;
    height: 25px;
  }
  .pingjia img{
    width: 25px;
    height: 25px;
  }
  .liulan img{
    width: 25px;
    height: 25px;
  }
  .two{
    width: 90%;
    height: auto;
    border-bottom: 1px solid #ecece7;
    margin-top: 20px;
    display: flex;
   /* border: 1px solid yellow;*/
    flex-direction: row;
    flex-wrap: wrap;
   /* text-align: center;*/
    /*justify-content: space-between;*/
  }
  .start1 img{
    width: 25px;
    height: 25px;
  }
  .two .start1{
    width: 75px;
    height: 65px;
    margin-left: 7.5px;
    margin-top: 5px;
    flex-wrap: wrap;
 /*  border: 1px solid black;*/
  }
  .title_one{
    margin-left: 18px;
    margin-top: 10px;
    font-size: 13px;
  }
.three{
  width: 90%;
  height: auto;
  border-bottom: 1px solid #ecece7;
  margin-top: 20px;
  display: flex;
  /* border: 1px solid yellow;*/
  flex-direction: row;
  flex-wrap: wrap;
  /* text-align: center;*/
  /*justify-content: space-between;*/
}
.start1 img{
  width: 25px;
  height: 25px;
}
.three .start1{
  width: 75px;
  height: 65px;
  margin-left: 7.5px;
  margin-top: 5px;
  flex-wrap: wrap;
  /*  border: 1px solid black;*/
}
.title_two{
  margin-left: 18px;
  margin-top: 10px;
  font-size: 13px;
}
</style>
