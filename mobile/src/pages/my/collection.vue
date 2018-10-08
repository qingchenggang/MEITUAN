<template>
    <div>
      <div class="hearder">
        <span class="arrow" @click="go">&#xe629;</span>
        <span class="collection" >我的收藏</span>
        <span class="bianji" @click="bianji" >编辑</span>
      </div>
      <div class="title">
        <div class="business" :class="{'isColor1':isA}" @click="business"><p>商家</p></div>
        <div class="product" :class="{'isColor2':isB}" @click="product"><p>商品</p></div>
        <div class="content" :class="{'isColor3':isC}" @click="content"><p>内容</p></div>
      </div>
      <router-view/>

    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "collection",
        data(){
            return{
              isA:true,
              isB:false,
              isC:false
            }
        },
      methods:{
        go(){
          this.$router.push({
            path:'my?id=4'
          })
        },
        bianji(){

        },
        business(){
          this.isA=true
          this.isB=false
          this.isC=false
          this.$router.push({
            path:'businessCollection'
          })
        },
        product(){
          this.isA=false
          this.isB=true
          this.isC=false
          this.$router.push({
            path:'productCollection'
          })
        },
        content(){
          this.isA=false
          this.isB=false
          this.isC=true
          this.$router.push({
            path:'contentCollection'
          })
        }
      },
      created(){
          if(this.isA=true){
            this.$router.push({
              path:'businessCollection'
            })
          }else if(this.isB=true){
            this.$router.push({
              path:'productCollection'
            })
          }else if(this.isC=true){
            this.$router.push({
              path:'contentCollection'
            })
          }
      }
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 836071 */
    src: url('//at.alicdn.com/t/font_836071_q1vyv6osear.eot');
    src: url('//at.alicdn.com/t/font_836071_q1vyv6osear.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_836071_q1vyv6osear.woff') format('woff'),
    url('//at.alicdn.com/t/font_836071_q1vyv6osear.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_836071_q1vyv6osear.svg#iconfont') format('svg');
  }
  .hearder{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b6a6a6;
  }
  .arrow{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color:#24b7ab;
    margin-left: 10px;
    font-size: 20px;
  }
  .collection{
    display: inline-block;
    line-height: 35px;
    font-weight: bold;
    font-size: 13px;
    color: black;
  }
  .bianji{
    display: inline-block;
    line-height: 35px;
    color:#24b7ab;
    font-size: 13px;
    margin-right: 10px;
  }
  .title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #dfdfdf;
  }
  .isColor1{
    border-bottom: 1px solid #24b7ab;
    color:#24b7ab ;
  }
  .isColor2{
    border-bottom: 1px solid #24b7ab;
    color:#24b7ab ;
  }
  .isColor3{
    border-bottom: 1px solid #24b7ab;
    color:#24b7ab ;
  }
  .business{
    width: 33.33%;

    text-align: center;

  }
  .product{
    width: 33.33%;

    text-align: center;
  }
  .content{
    width: 33.33%;

    text-align: center;
  }
</style>
