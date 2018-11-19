<template>
  <div>
    <div class="footer-div">
      <div class="footer-concent" v-for="(list,index) in dizhi" :key="index">
        <div style="display: inline-block">
          <div class="both">
            <span class="addressname">{{list.name}}</span>
            <div class="huidiv" v-if="list.benefit==true">
              <p class="hui">惠</p>
            </div>
            <div class="kadiv" v-if="list.card==true">
              <p class="ka">卡</p>
            </div>
          </div>
          <span class="distance">{{list.distance}}</span>
        </div>
        <div style="">
          <span class="money">{{list.money}}</span>
          <div class="xiaoshidiv" v-if="list.xiaochi==true">
            <p class="xiaoshi">小吃</p>
          </div>
          <div class="carddiv" v-if="list.ka==true">
            <p class="card">折扣卡</p>
          </div>
          <div class="fourdiv" v-if="list.fourk==true">
            <p class="four">4K厅</p>
          </div>
          <div class="maxdiv" v-if="list.max==true">
            <p class="max">IMAX厅</p>
          </div>
          <div class="judiv" v-if="list.ju==true">
            <p class="ju">巨幕厅</p>
          </div>
          <div class="dubidiv" v-if="list.dubi==true">
            <p class="dubi">杜比全景声厅</p>
          </div>
          <div class="tuidiv" v-if="list.tui==true">
            <p class="tui">退</p>
          </div>
        </div>
        <div class="field">
          <p>近期场次：<span v-if="list.time1!=''">{{list.time1}}</span>&nbsp;<span v-if="list.time2!=''">{{list.time2}}</span>&nbsp;<span v-if="list.time3!=''">{{list.time3}}</span></p>
        </div>



      </div>

    </div>
  </div>
</template>

<script>
  import {reqmovie} from "../../api";
  export default {
    name: "movieanther",
    data(){
      return{
        lists:[],
        dizhi:[]
      }
    },
    async mounted(){
      const result=await reqmovie()
      this.lists = result
      var as=this.$route.params.movieid//当前页面数据下标
     // console.log(this.lists[as-1].anther)
      this.dizhi=this.lists[as-1].anther
    }
  }
</script>

<style scoped>
  .footer-div{
    width: 100%;
  }
  .footer-concent{
    width: 100%;
    height: 110px;
    border-top: 1px solid #f7f0f0;
  }
  .footer-concent .addressname{
    width: auto;
    margin-left: 13px;
    font-family: STHeiti;
    margin-top: 15px;
    display: inline-block;
  }
  .both{
    width: 300px;
    display: inline-block;
  }
  .money{
    margin-left: 13px;
    color: #2bb79a;
    margin-top: 10px;
    display: inline-block;
  }
  .huidiv{
    display: inline-block;
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

    margin-top: 5px;
  }
  .kadiv{
    display: inline-block;
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
    margin-top: 5px;
  }

  .distance{
    margin-left: 20px;
    font-size: 12px;
    color: #a4a4a4;
  }
  .xiaoshidiv{
    display: inline-block;
  }
  .xiaoshi{
    width: 25px;
    height: 18px;
    border: 1px solid #f7b672;
    text-align: center;
    color: #f7b672;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .carddiv{
    display: inline-block;
  }
  .card{
    width: 45px;
    height: 18px;
    border: 1px solid #f7b672;
    text-align: center;
    color: #f7b672;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .fourdiv,.maxdiv,.judiv,.dubidiv,.tuidiv{
    display: inline-block;
  }
  .four{
    width: 45px;
    height: 18px;
    border: 1px solid #a0c055;
    text-align: center;
    color: #a0c055;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .max{
    width: 45px;
    height: 18px;
    border: 1px solid #a0c055;
    text-align: center;
    color: #a0c055;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .ju{
    width: 45px;
    height: 18px;
    border: 1px solid #a0c055;
    text-align: center;
    color: #a0c055;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .dubi{
    width: 70px;
    height: 18px;
    border: 1px solid #a0c055;
    text-align: center;
    color: #a0c055;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .tuidiv{
    width: 15px;
    height: 18px;
    border: 1px solid #a0c055;
    text-align: center;
    color: #a0c055;
    border-radius: 3px;
    font-size: 7px;
    margin-top: 5px;
  }
  .field{
    margin-left: 13px;
    font-size: 12px;
    color: gray;
    margin-top: 5px;
  }
</style>
