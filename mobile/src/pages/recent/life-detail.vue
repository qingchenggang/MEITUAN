<template>
  <div id="life-detail">

    <div v-show="success" class="animated bounceIn success_button">收藏成功</div>
    <div v-show="fail" class="animated bounceIn fail_button">取消收藏成功</div>
    <div  class="share_box" v-show="share_box" :class="{'fadeIn':isB,'fadeOut':isC}">
      <div class="animated share_tan":class="{'fadeInUp':isB,'fadeOutDown':isC}">
        <p class="shareto">分享到</p>
        <div class="footer-box">
          <div>
            <img src="../../../static/images/meishi_detail/weixin.png" alt="">
            <p>微信好友</p>
          </div>
          <div>
            <img src="../../../static/images/meishi_detail/pengyouqun.png" alt="">
            <p>朋友圈</p>
          </div>
          <div>
            <img src="../../../static/images/meishi_detail/qq.png" alt="">
            <p>QQ好友</p>
          </div>
          <div>
            <img src="../../../static/images/meishi_detail/kongjian.png" alt="">
            <p>QQ空间</p>
          </div>
          <div>
            <img src="../../../static/images/meishi_detail/weibo.png" alt="">
            <p>微博</p>
          </div>
          <div>
            <img src="../../../static/images/meishi_detail/copy.png" alt="">
            <p>复制</p>
          </div>
        </div>
        <p class="cancel" @click="sharePopue">取消</p>
      </div>
    </div>
    <div class="set" v-show="xian">
      <div class="mokuai" @click="home">
        <i class="iconfont home" >&#xe61c;</i><span>首页</span>
      </div>
      <div class="mokuai" @click="serch">
        <i class="iconfont serch" >&#xe662;</i><span>搜索</span>
      </div>
      <div class="mokuai" @click="order">
        <i class="iconfont order" >&#xe60e;</i><span>我的订单</span>
      </div>
      <div class="mokuai" @click="collection">
        <i class="iconfont collection" >&#xe646;</i><span>我的收藏</span>
      </div>
      <div class="mokuai" @click="error">
        <i class="iconfont error" >&#xeee5;</i><span>报错</span>
      </div>

    </div>
    <div v-for="(list,index) in lists" :key="index" v-if="$route.params.lifeid==list.id">
      <div class="hearder">
        <span class="arrow" @click="go">&#xe629;</span>
        <span class="start" @click="start(list.kong,list.id)" v-if="list.kong==true">&#xe646;</span>
        <span class="start" @click="start(list.kong,list.id)" v-else-if="list.kong==false">&#x24b7a;</span>
        <span class="share" @click="share">&#xe619;</span>
        <span class="dian" @click="dian">&#xe637;</span>
      </div>
      <div class="detail">
        <div class="left">
          <h4>{{list.name}}</h4>
          <span class="score_wrapper"></span> <span class="start2"><span class="start1">{{list.start}}</span>分</span><span class="money">|<span>{{list.money}}</span> </span><br>
          <span class="countDown">&#xe65c;</span><span class="close">{{list.time}}</span><span class="popularity">{{list.popularity}}</span>
        </div>
        <div class="right">
          <img v-image-preview :src="list.img" alt="">
        </div>
        <div class="address1">
          <span class="address">&#xe64e;</span>
          <div>{{list.address}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {reqlifedetail} from "../../api";
  export default {
    name: "life-detail",
    data(){
      return{
        lists:[],
        success:false,
        fail:false,
        share_box:false,
        isB:true,
        isC:false,
        newLists:[],
        localData:[],
        dsdData:[],
        xian:false
      }
    },
    async mounted(){
      const result=await reqlifedetail()
      this.lists = result
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
      let ha= JSON.parse(localStorage.getItem('life'))
      //alert(ha)
      if(ha==null){
        this.lists=this.lists
      }else{
        this.lists = JSON.parse(localStorage.getItem('life'))
        // alert(this.newLists[this.$route.params.meishiid-1].name)
        if(this.lists[this.$route.params.lifeid-1].kong==true){
          //  alert(this.newLists[this.$route.params.meishiid-1].kong)
          this.lists[this.$route.params.lifeid-1].kong=true
        }else if(this.lists[this.$route.params.lifeid-1].kong==false){
          // alert(this.newLists[this.$route.params.meishiid-1].kong)
          this.lists[this.$route.params.lifeid-1].kong=false
        }
      }
    },
    methods:{
      go(){
        this.$router.back(-1)
      },
      start(state,id){
        this.xian=false
        let zhi=[];
        this.localData = []
        if(this.lists[id-1].kong==true){
          //  alert("未收藏变收藏")
          this.success=true
          this.lists[id-1].kong=false
          localStorage.setItem('life', JSON.stringify(this.lists));
          zhi=JSON.parse(localStorage.getItem('zhuangtai1'));
          if(zhi!=null ){
            this.localData.push(...zhi,this.lists[id-1])
            localStorage.setItem('zhuangtai1', JSON.stringify(this.localData));
            // console.log(this.localData)
          }else{
            // alert('第二个')
            if(this.dsdData.length==0){
              this.dsdData.push(this.lists[id-1])
              localStorage.setItem('zhuangtai1', JSON.stringify(this.dsdData));
            }
          }
          setTimeout(()=>{
            this.success=false
          },1000)
        }else if(this.lists[id-1].kong==false){
          // alert("已经收藏了变取消收藏")
          this.fail=true
          this.lists[id-1].kong=true
          localStorage.setItem('life', JSON.stringify(this.lists));
          this.newLists=JSON.parse(localStorage.getItem('zhuangtai1'));
          // console.log('取消之前的数组====>',this.newLists)
          this.newLists = this.newLists.filter(item =>
            item.id!=id
          )
           // console.log('取消之后的数组====>',this.newLists)
          localStorage.setItem('zhuangtai1', JSON.stringify(this.newLists));
          this.newLists = []
          this.localData = []
        //  console.log(this.newLists)
          setTimeout(()=>{
            this.fail=false
          },1000)
        }
      },
      share(){
        this.share_box=true
        this.isB=true
        this.isC=false
        this.xian=false
      },
      sharePopue(){
        this.isB=false
        this.isC=true
        setTimeout(()=>{
          this.share_box=false
        },250)
      },
      dian(){
        this.xian=!this.xian
      },
      home(){
        this.$router.push('/home?id=1')
      },
      serch(){
        this.$router.push('/home?id=1')
      },
      order(){
        this.$router.push('/order?id=3')
      },
      collection(){
        this.$router.push('/collection')
      },
      error(){
        this.$router.push('/home?id=1')
      }
    },
    created() {
      this.newLists = []
      this.localData = []
    //  console.log(this.dsdData)
    },
    watch: {
      '$route'(to, from) {
        //  console.log(to,from)
        if (to.query.id){
          this.id = to.query.id
        } else{
          this.id = "2";
        }
      },
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
  .start1,.start2,.money{
    font-size: 13.5px;
    color: #949c93;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 836071 */
    src: url('//at.alicdn.com/t/font_836071_q1vyv6osear.eot');
    src: url('//at.alicdn.com/t/font_836071_q1vyv6osear.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_836071_q1vyv6osear.woff') format('woff'),
    url('//at.alicdn.com/t/font_836071_q1vyv6osear.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_836071_q1vyv6osear.svg#iconfont') format('svg');
  }
  .arrow{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color:#24b7ab;
    margin-left: 10px;
    font-size: 20px;
  }
  .start{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color:#24b7ab;
    margin-left: 60%;
    font-size: 20px;
  }
  .share{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color:#24b7ab;
    margin-left: 10px;
    font-size: 20px;
  }
  .dian{
    font-family: 'iconfont';
    display: inline-block;
    line-height: 35px;
    color:#24b7ab;
    margin-left: 10px;
    font-size: 20px;
  }
  .hearder{
    width: 100%;
    height: 35px;
  }
  .left{
    float: left;
    width: 60%;
  }
  .detail{
    width: 100%;
    height: 125px;

  }
  .detail h4{
    width: 190px;
    word-wrap:break-word;
    margin-left: 13px;
  }
  .right{
    float: left;
  }
  .right img{
    width: 120px;
    margin-left: 8px;
  }
  .countDown{
    font-family: 'iconfont';
    color: #ed8423;
    margin-left: 13px;
    font-size: 13.5px;
  }
  .close{
    font-size: 13.5px;
    color: #949c93;
    margin-left: 5px;
  }
  .popularity{
    font-size: 13.5px;
    color: #949c93;
    margin-left: 8px;
  }
  .address1{
    clear: both;
    margin-top: 100px;
    width: 100%;
    height: 20px;

  }
  .address{
    font-family: 'iconfont';
    margin-left: 13px;
    float: left;
    margin-top: 5px;
  }
  .address1 div{
    width: 89%;
    word-wrap:break-word;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
  }

  .success_button{
    width: 120px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -60px;
    margin-top: -25px;
    text-align: center;
    line-height: 50px;
    background-color: rgba(0,0,0,.49);
    color: white;
    border-radius:5px ;
  }

  .fail_button{
    width: 120px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -60px;
    margin-top: -25px;
    text-align: center;
    line-height: 50px;
    background-color: rgba(0,0,0,.49);
    color: white;
    border-radius:5px ;
  }
  .share_box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0,0,0,.49);
  }
  .share_box .share_tan{
    width: 95%;
    height: 250px;
    background-color: white;
    position: absolute;
    bottom: 20px;
    left: 9px;
    z-index: 10;
    text-align: -webkit-center;
    border-radius: 10px;
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
  }
  .footer-box{
    width: 85%;
    display: flex;
    margin-top: 2px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer-box div{
    flex-wrap: wrap;
    margin-top: 15px;
    text-align: center;
  }
  .share_tan img{
    width: 50px;
    height: 50px;
  }
  .share_tan .shareto{
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
  .footer-box p{
    color: gray;
  }
  .cancel{
    border-top:1px solid gainsboro ;
    height: 35.5px;
    line-height: 35.5px;
  }
  .set{
    width: 40%;
    height: 184px;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    right: 0;
    top: 40px;
    border-radius: 5px;
    color: #cbccce;
    font-size: 15px;
  }
  .mokuai{
    width: 120px;
    height: 35px;
    border-bottom: 1px solid #cbccce;
    margin-left: 15px;
    margin-top: 2px;
  }
  .mokuai span:nth-child(2){
    margin-left: 15px;
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:20px;
  }
</style>
