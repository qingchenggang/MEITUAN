<template>
	<div>
		<div class="header">
			<div class="scan">
				<span @click="scan">&#xe629;</span>
			</div>
			<div class="search_input">
				<span v-show='exhibit'>&#xe623;</span><input type="text"  @focus="Isfocus" @blur="Isblur" name="" id="" value="" />
			</div>
			<span class="search" @click="search">搜索</span>
		</div>
	</div>
</template>
<script>

  import {mapState} from 'vuex'
	export default {
		data() {
			return {
			  shuju:'',
				exhibit: true
			}
		},
		methods: {
			Isfocus() {
				this.exhibit = false
        this.shuju=this.address.city
        this.address.city=''
			},
			Isblur() {
				this.exhibit = true
        this.address.city=this.shuju
			},
			scan() {
        this.$router.go(-1)
			},
			search() {
				alert(456)
			}
		},
    computed: {
      ...mapState(['address']),
    }

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
    width: 230px;
    height: 40px;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #f4f4f4;
    border-radius: 20px;
    /*border: 1px solid green;*/
  }
	.search_input input {
		width: 200px;
		height: 38px;
		margin-left: 4px;
		border-radius: 20px;
		border: 0;
    background-color: #f4f4f4;
		/*border: 1px solid red;*/
	}

	.search_input span {
		font-family: 'iconfont';
		margin-left: 5px;
	}

	.search {
		width: 40px;
		height: auto;
		text-align: center;
		/*border: 1px solid black;*/
		float: left;
		line-height: 63px;
		margin-left: 10px;
	}

</style>
