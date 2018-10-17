<template>
  <div>
    <router-link :to="{name:'meishiDetail',params:{meishiid:list.id}}" class="list" v-for="(list,index) in lists"  :key="list.id+1" tag="div">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p><span class="score_wrapper"></span><span style="display: block" class="start1">{{list.start}}</span></p>
        <p>{{list.address}}</p>
      </div>
    </router-link>
    <router-link :to="{name:'lifeDetail',params:{lifeid:list.id}}" class="list" v-for="(list,index) in lists1" :key="list.id+2" tag="div">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p><span class=""></span><span style="display: none" class="start2">{{list.start}}</span></p>
        <p>{{list.address}}</p>
      </div>
    </router-link>
    <router-link :to="{name:'playdetail',params:{playid:list.id}}" class="list" v-for="(list,index) in lists2" :key="list.id+3" tag="div">
      <img :src="list.img" alt="">
      <div class="text">
        <h4>{{list.name}}</h4>
        <p><span class=""></span><span style="display: none" class="start3">{{list.start}}</span></p>
        <p>{{list.address}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "business-collection",
        data(){
            return{
              lists:[],
              lists1:[],
              lists2:[],
            }
        },
        created(){
        this.lists = JSON.parse(localStorage.getItem('zhuangtai')),
        this.lists1 = JSON.parse(localStorage.getItem('zhuangtai1')),
        this.lists2 = JSON.parse(localStorage.getItem('zhuangtai2'))
      },
        async mounted(){
        function ScoreInit(e) {
          Score((e == null) ? 0 : e); //传空默认0颗星
          $(".score_wrapper").bind('click', function (e) {
            var eachWidth = $(".score_wrapper").width() / 5; //计算出每个星星的长度
            var X = e.pageX - $(this).offset().left; //距离父容器的偏移距离
            var score = Math.floor(X / eachWidth) + 1; //分数
            // Score((getScore() == score) ? 0 : score); //取消评分
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
  .score_wrapper {
    display:inline-block;
    font-size: 45px;
    font-size: 15px;
    cursor: pointer;
    color: #ff9e20;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    margin-left: 13px;
  }
  .list{
    width: 100%;
    height: 90px;
    background-color: white;
  }
  .list img{
    width: 120px;
    height: 70px;
    margin-left: 9px;
    margin-top: 11px;
    float: left;
  }
  .text{
    float: left;
  }
  .text h4{
    width:11rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    display: inline-block;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }
  .text p:nth-child(3){
    width: 11rem;
    margin-left: 10px;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #666;
  }
</style>
