<template>
	<div>

		<div class="a" v-for="(product,index) in products" :key='index' v-if="$route.params.detailid==product.id">
			<!--{{product.id}}
			{{product.name}}-->


			名字：<input type="text" v-model="product.name" />{{product.name}}<br /> 图片：
			<input type="text" v-model="product.img" />
      <button @click="back">返回</button>
			<!--	<router-link :to="{name:'home',params:{bme:product.name}}"  tag="button" >
				修改


			</router-link>-->
			<button @click="xiugai(product.name,product.id,product.img)">修改</button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: [
				],
				data: []
			}
		},
		created() {
			this.products = JSON.parse(localStorage.getItem('zhi'));
		/*	let get=JSON.parse(localStorage.getItem('zhi'));
					console.log(get)
					if(get.length!=0){
						this.products=get
					}else{
						this.products= this.products
					}*/
			//console.log(this.products)
		},
		methods: {
      back(){
        this.$router.back(-1)
      },
			xiugai(a, b, c) {
				let newProducts = JSON.parse(localStorage.getItem('zhi'));
				if(newProducts.length!=0){
						newProducts=newProducts
					}else{
						newProducts= this.products
					}
			//	console.log(newProducts);
				for(let i of newProducts) {
					if(i.id == b) {
						i.name = a
						i.img = c
					}
				}
				localStorage.setItem('zhi', JSON.stringify(newProducts));
				this.products = JSON.parse(localStorage.getItem('zhi'));
				console.log(newProducts);
				console.log(this.products)
				this.$router.push('/home')
			}
		}

	}
</script>

<style>

</style>
