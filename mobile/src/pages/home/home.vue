<template>
	<div id="home">
    <!--<div :class="{'start':isA,'end':isB}" >
      dsdad
    </div>-->
		<navigation></navigation>
		<broadcast></broadcast>
		<middle></middle>
		<div style="margin-bottom: 56px;"> </div>
	</div>
</template>

<script>
	import navigation from './navigation'
	import broadcast from './broadcast'
	import middle from './middle'

	export default {
	  name:'home',
		data() {
			return {
        isA:true,
        isB:false
			}
		},
		components: {
			navigation,
			broadcast,
			middle
		},
		watch: {

		},
    mounted(){
      window.addEventListener('scroll',this.handleScroll,true)
    },
    methods:{
      handleScroll(e){
      //  console.log(e.target.scrollTop)
        if(e.target.scrollTop>100){
           /* this.isA=false
            this.isB=true*/
       /*   alert('100啦')*/
        }else{
         /* this.isA=true
          this.isB=false*/
        }
      }
    }
  }
</script>

<style scoped>
  broadcast{
    overflow: hidden;
  }
  .start{
    margin-left: 60px;
    margin-top: 300px;
  }
  .end{
    margin-left: 0px;
  }
</style>
