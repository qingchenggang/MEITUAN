<template>
  <div>
    <div class="header">
      <div class="scan">
        <span @click="scan">&#xe629;</span>
      </div>
      <div class="search_input">
          <div class="movie" :class="{'isColor':isA}" @click="movie"><p>电影</p></div>
          <div class="demand" :class="{'isColor':isB}" @click="demand"><p>点播</p></div>
          <div class="mall" :class="{'isColor':isC}" @click="mall"><p>商城</p></div>
          <div class="show" :class="{'isColor':isD}" @click="show"><p>演出</p></div>
      </div>
      <i class="search iconfont" @click="search">&#xe623;</i>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

    export default {
        name: "moviehome",
        data(){
            return{
              isA:true,
              isB:false,
              isC:false,
              isD:false
            }
        },
      methods:{
        scan(){
          this.$router.go(-1)
          },
        search(){

        },
        movie(){
          this.isA=true
          this.isB=false
          this.isC=false
          this.isD=false
          this.$router.push({
            path:'movieHome',
          })
        },
        demand(){
          this.isA=false
          this.isB=true
          this.isC=false
          this.isD=false
          this.$router.push({
            path:'movieTwo',
          })
        },
        mall(){
          this.isA=false
          this.isB=false
          this.isC=true
          this.isD=false
          this.$router.push({
            path:'movieThree',
          })
        },
        show(){
          this.isA=false
          this.isB=false
          this.isC=false
          this.isD=true
          this.$router.push({
            path:'movieFour',
          })
        }

      },
      mounted(){
         this.$router.push('movieHome')
      },
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
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
    margin-left: 35px;
  /*  background-color: #f4f4f4;*/
    border-radius: 5px;
    display: flex;
    color: #24b7ab;

  }
  .movie{
    width: 3rem;
    height: 40px;
    border-radius: 5px 0 0 5px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #24b7ab;
    border-right: 0;
  }
  .demand{
    width: 3rem;
    height: 40px;

    text-align: center;
    line-height: 40px;
    border: 1px solid #24b7ab;
    border-right: 0;
  }
  .mall{
    width: 3rem;
    height: 40px;

    text-align: center;
    line-height: 40px;
    border: 1px solid #24b7ab;
    border-right: 0;
  }
  .show{
    width: 3rem;
    height: 40px;
    border-radius: 0 5px 5px 0;
    text-align: center;
    line-height: 40px;
    border: 1px solid #24b7ab;
  }
  .isColor{
    background-color: #24b7ab;
    color: white;
  }
  .search {
    width: 40px;
    height: auto;
    text-align: center;
    /*border: 1px solid black;*/
    float: left;
    line-height: 63px;
    margin-left: 40px;
    color: #24b7ab;
    font-size: 20px;
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


</style>
