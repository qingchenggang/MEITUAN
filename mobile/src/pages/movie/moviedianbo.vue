<template>
    <div>
      <div class="header">
        <div class="scan">
          <span @click="scan">&#xe629;</span>
        </div>
        <div class="search_input">
          <p>上映影院与购票</p>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "moviedianbo",
        data(){
            return{

            }
        },
      methods:{
        scan(){
          this.$router.push({
            path:"/movieHome/movieTwo",
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
</style>
