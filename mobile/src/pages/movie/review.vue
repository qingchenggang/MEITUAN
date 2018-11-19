<template>
    <div id="review">
      <div class="header">
        <div class="scan">
          <span @click="scan">取消</span>
        </div>
        <div class="search_input">
          <p>我的评论</p>
        </div>
        <p class="search" @click="search($route.query.id)">发布</p>
      </div>
      <div class="xingxing" v-for="(list,index) in lists" :key="index" v-if="$route.query.id==list.id">
        <div class="score_wrapper"></div>
        <span style="display: none" class="start1">{{list.start}}</span>
      </div>
    </div>
</template>

<script>
  import {reqmovie} from "../../api";
    export default {
        name: "review",
        data(){
            return{
              lists:[],
              start:'',
              id:''
          }
        },
        methods:{
          scan(){
            this.$router.go(-1)
          },
          search(id){
            this.$router.push({
              path:"movieDetail/"+id
            })
          }
        },
      async mounted(){
        let ha= JSON.parse(localStorage.getItem('moviex'))
        console.log(ha)
        const result=await reqmovie()
        this.lists = ha
        console.log(this.lists)
        var lists=this.lists
        var sa=parseInt(this.lists[this.$route.query.id-1].id)
        this.id=sa
        function ScoreInit(e) {
          Score((e == null) ? 0 : e); //传空默认0颗星
          $(".score_wrapper").bind('click', function (e) {
            var eachWidth = $(".score_wrapper").width() / 5; /*//计算出每个星星的长度*/
            var X = e.pageX - $(this).offset().left; //距离父容器的偏移距离
            var score = Math.floor(X / eachWidth) + 1; //分数
            Score((getScore() == score) ? 0 : score); //取消评分
            console.log(sa)
            console.log(lists)
            lists[sa-1].start=score
            this.start=score
            localStorage.setItem('moviex', JSON.stringify(lists));
          })
        }
        //评分
        function Score(rate) {
          $(".score_wrapper").html("★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate));
        }
        //获取评分
        function getScore() {
          var str = $(".score_wrapper").html(), num = 0;
          for (var i = 0; i < str.length; i++) {
            if (str[i] == '★') {
              num++
            }
          }
          return num;
        }
        $(function(){
          var start=$(".start1").html()
          ScoreInit(start); //初始化，参数是0～5的数字，代表星数，传空默认0颗星
        })
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
    line-height: 61px;
    font-family: 'iconfont';
    font-size: 14px;
    text-align: center;
    color: grey;
  }
  .search_input {
    width: auto;
    height: 40px;
    float: left;
    margin-top: 10px;
    margin-left: 5rem;
    /* background-color: #f4f4f4; */
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 40px;
    font-size: 16px;
  }
  .search[data-v-0d7d90a2] {
    width: 40px;
    height: auto;
    text-align: center;
    float: left;
    /* line-height: 63px; */
    margin-left: 120px;
    color: white;
    font-size: 14px;
    margin-top: 20px;
    background-color: #24b7ab;
    border-radius: 2px;
  }
  .xingxing{
    margin-top: 60px;
  }
  .score_wrapper {
    display:inline-block;
    font-size: 45px;
    cursor: pointer;
    color: #dc2020;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
</style>
