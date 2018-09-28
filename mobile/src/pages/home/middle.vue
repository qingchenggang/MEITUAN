<template>
	<div class="middle">
		<!--{{$route.params.bid}}-->

		<div class="big">
			<router-link :to="{name:'detail',params:{detailid:list.id}}" class="card" v-for="(list,index) in lists" tag="div" :key='index'>
				<img v-lazy="list.img" alt="" />
				<p>{{list.name}}</p>
				<p>{{list.id}}</p>

			</router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
  import {reqtodos} from "../../api";
	export default {
		data() {
			return {
				lists:[]

			}
		},
		/*watch: {
			handler() {
				localStorage.setItem('zhi', JSON.stringify(this.lists));
			},
			deep: true
		},*/
		methods:{
			/*	getData() {

			}*/
		},
		created() {
				axios.get('http://localhost:3000/todos').then(res => {
					//console.log(res)
					this.lists = res.data
					//console.log(this.lists)
					//this.lists = JSON.parse(localStorage.getItem('zhi')) || this.lists;
					let get=JSON.parse(localStorage.getItem("zhi"));
				//	console.log(get)
					if(get!=null){
						this.lists=get
					}else{
						this.lists= this.lists
					}
					localStorage.setItem('zhi', JSON.stringify(this.lists));
				//	console.log(this.lists)
				}, err => {
					console.log(err)
				})
		},
/*   async mounted(){
      const result=await reqtodos()
      this.lists = result
      console.log(result)
      let get=JSON.parse(localStorage.getItem('zhi'));
      if(get!=null){
        this.lists=get
      }else{
        this.lists= this.lists
      }
      localStorage.setItem('zhi', JSON.stringify(this.lists));
      console.log(this.lists)
    }*/
	}
</script>

<style scoped>
	.middle {
		width: 100%;
		margin-top: 5px;
	}

	.big {
		width: 94%;
		height: auto;
		/*border: 1px solid red;*/
		margin: 0 auto;
		overflow: hidden;
	}

	.card {
		width: 50%;
		height: auto;
		border: 1px solid black;
		float: left;
	}

	.card img {
		width: 100%;
		height: auto;
	}
</style>
