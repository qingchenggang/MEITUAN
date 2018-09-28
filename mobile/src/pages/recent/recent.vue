<template>
	<div class="hello">
    <addresstTop></addresstTop>
    <div class="box">
      <div @click="one" :class="{'isColor1':isB}">
        <p>享美食</p>
        <div style="width:100%;text-align: center;display: flex;justify-content: center;">
          <div :class="{'one-hr':isA}"></div>
        </div>
      </div>
      <div @click="two" :class="{'isColor2':isD}">
         <p> 惠生活</p>
        <div style="width:100%;text-align: center;display: flex;justify-content: center;">
           <div :class="{'two-hr':isC}"></div>
        </div>
      </div>
      <div @click="three" :class="{'isColor3':isF}">
        <p>爱玩乐</p>
        <div style="width:100%;text-align: center;display: flex;justify-content: center;">
            <div :class="{'three-hr':isE}"></div>
        </div>
      </div>
    </div>
      <router-view/>
	</div>
</template>
<script>
  import addresstTop from './address-top'

	export default {
    data() {
      return {
        id: "2",
        isA:true,
        isB:true,
        isC:false,
        isD:false,
        isE:false,
        isF:false,
      }
    },
    components: {
      addresstTop

    },
    methods: {

      one(){
        this.isA=true
        this.isC=false
        this.isE=false
        this.isB=true
        this.isD=false
        this.isF=false
        this.$router.push({
          path:'recent?id=2',
          query: {
            haha: true
          }
        })

      },
      two(){
        this.isA=false
        this.isC=true
        this.isE=false
        this.isB=false
        this.isD=true
        this.isF=false
        this.$router.push({
          path:'two?id=2',
          query: {
            haha: true
          }
        })
      },
      three(){
        this.isA=false
        this.isC=false
        this.isE=true
        this.isB=false
        this.isD=false
        this.isF=true
        this.$router.push('three?id=2')
      }
    },
    computed: {

    },
    created: function () {

    },
    watch: {
      '$route'(to, from) {
       // console.log(to)
     /* console.log(to.id)
        console.log(from.id)*/
    /*    if (to.query.id){
          this.id = to.query.id
        } else{
          this.id = "2";
        }*/
        /*从‘爱玩乐’跳转‘惠生活’*/
        if(to.name=='two' && from.name=='three'){
          this.$route.query.haha=false
        }
        /*从‘惠生活’跳转‘享美食’*/
        if(to.name=='one' && from.name=='two'){
          this.$route.query.haha=false
        }
        /*从‘爱玩乐’跳转‘享美食’*/
        if(to.name=='one' && from.name=='three'){
          this.$route.query.haha=false
        }
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
  .box{
    width: 100%;
    display: flex;
    flex-direction: row; /*横向排列*/
    justify-content: space-around;
    text-align: center;
    margin-top: 50px;
  }
  .one-hr{
    width: 40px;
    height: 9px;
    border-bottom: 3px solid red;
  }
  .two-hr{
    width: 40px;
    height: 9px;
    border-bottom: 3px solid red;
  }
  .three-hr{
      width: 40px;
      height: 9px;
      border-bottom: 3px solid red;
  }

  .isColor1{
    color:red;
    font-size: 18px;
   /* text-decoration:underline;*/

    border-width:3px;
  }
  .isColor2{
    color:red;
    font-size: 18px;
    /*text-decoration:underline;*/
  }
  .isColor3{
    color:red;
    font-size: 18px;
   /* text-decoration:underline;*/
  }


</style>
