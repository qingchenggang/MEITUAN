<template>
	<div class="hello">
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">
						Products
					</a>
				</div>
			</div>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<label for="">添加数量</label><input type="text" v-model="shuliang" />
					<label for="">添加单价</label><input type="text" v-model="danjia" />
					<button @click="add">添加</button>
					<div class="panel panel-warning">
						<div class="panel-heading">(总共有{{count}}条数据)</div>
						<div class="panel-body">
							<table class="table table-hover table-bordered" border="1">
								<caption class="h2 text-warning text-center">购物车</caption>
								<tr>
									<th>全选<input type="checkbox" v-model="checkAll" /></th>
									<th>商品</th>
									<th>单价(元)</th>
									<th>数量(个)</th>
									<th>小计(元)</th>
									<th>操作</th>
								</tr>
								<tr v-for="(product,index) in filterProducts" @dblclick="remember(product)">
									<td><input type="checkbox" v-model="product.select" /></td>
									<td><img src="https://img10.360buyimg.com/cms/s80x80_jfs/t20545/174/2656210816/71017/35309e1c/5b616274N4cb22772.jpg" alt="" /></td>
									<td>
										<span v-show="cur!=product">{{product.age}}</span>
										<input type="number" v-model.number="product.age" min='1' v-show="cur==product" @keyup.enter="cancel" @blur="cancel" />
									</td>
									<td>{{product.id}}</td>
									<!--过滤器：原数据不变的情况下，改变显示效果 |也叫管道符-->
									<td>{{product.age*product.id |toFixed(2)}}</td>
									<td><button type="button" class="btn btn-danger" @click="remove(product)">删除</button></td>
								</tr>
								<tr>
									<td colspan="6">总计：{{sum |toFixed(2)}}元</td>
								</tr>
							</table>
						</div>
						<div class="panel-footer">
							<ul class="nav nav-pills">
								<li role="presentation" :class="{active:hash===''}">
									<a href="#">全部任务</a>
								</li>
								<li role="presentation" :class="{active:hash==='finish'}">
									<a href="#finish">已勾选</a>
								</li>
								<li role="presentation" :class="{active:hash==='unfinish'}">
									<a href="#unfinish">未勾选</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="form-group">
						<label for="exampleInputEmail1">用户名</label>
						<input type="email" class="form-control" id="exampleInputEmail1" placeholder="用户名" v-model="yonghu">
					</div>
					<label for="exampleInputEmail1">评论内容</label>
					<textarea class="form-control" rows="3" placeholder="评论内容" v-model="pinglun"></textarea>
					<button @click="tijiao">提交</button>
					
					<div class="kuang form-control" v-show="xian">
						<div v-for="(add,index) in adds" :key='index' >
							{{add.name}} <span class='del' @click="del(add)">{{add.shan}} </span>
							{{add.describe}}
						{{add.add_time |dateFrm}}
						</div>
					</div>
				</div>

			</div>
		</div>
		<input type="text" v-model="wenzi" />{{msg}}
		<input type="text" v-model="a" />
		<label for="searchName">搜索</label><input type="text" v-model="searchName" />
		<ul>
			<li v-for="(list,index) in filterLists" :key="index">
				{{index}}--{{list.name}}--{{list.age}}
			</li>
		</ul>
		<button @click="setOrderType(1)">升序排列</button>
		<button @click="setOrderType(2)">降序排列</button>
		<button @click="setOrderType(0)">原本排列</button>
	</div>
</template>

<script>
	import moment from 'moment'
	/*import moment from 'moment/min/moment-with-locales.js'*/
	import axios from 'axios';
	import qs from 'qs';
	export default {
		name: 'HelloWorld',
		filters: {
			toFixed(input, param1) {
				return '￥' + input.toFixed(param1) //input代表是管道符前面的额内容 ，param1代表的是tofixed中传的参数
			},
			dateFrm(el){
				return moment(el).startOf('minute').fromNow();
			}
		},
		data() {
			return {
				products: [],
				wenzi: '',
				a: '',
				cur: '',
				shuliang: '',
				danjia: '',
				hash: '',
				lists: [{
						name: 'Tom',
						age: '21'
					},
					{
						name: 'Alice',
						age: '26'
					},
					{
						name: 'Jack',
						age: '31'
					},
					{
						name: 'Sam',
						age: '11'
					},
					{
						name: 'Rose',
						age: '28'
					},
					{
						name: 'Bob',
						age: '12'
					},
				],
				searchName: '',
				orderType: 0,
				adds: [{
					name: '',
					describe: '',
					shan:''
				}],
				yonghu: '',
				pinglun: '',
				xian:'',
				add_time:''
				
				
				

			}
		},

		computed: {
			filterLists() { //搜索框

				if(this.orderType != 0) {
					this.lists.sort((item1, item2) => {
						if(this.orderType == 2) {
							return item2.age - item1.age
						} else {
							return item1.age - item2.age
						}
					})
				}
				return this.lists.filter(item => item.name.indexOf(this.searchName) !== -1)
			},
			filterProducts() {
				if(this.hash == '') return this.products;
				if(this.hash == 'finish') return this.products.filter(item => item.select);
				if(this.hash == 'unfinish') return this.products.filter(item => !item.select);
				return this.products;
			},
			count() { //计算勾选数据得个数
				return this.products.filter(item => item.select).length
			},
			msg() {
				if(this.wenzi.length > 0 && this.wenzi.length < 3) {
					return "输入的文字少了"
				}
				if(this.wenzi.length > 6) {
					return "输入的文字多了"
				}
				return '';
			},
			checkAll: { //当produces值变化时 会重新计算
				get() { //get和set this指向实例 默认调用get
					return this.products.every(item => item.select)
				},
				set(val) { //当给checkbox赋值的时候
					return this.products.forEach(item => item.select = val)
				}
			},
			sum() { //如果计算属性写成函数 默认调用的就是get方法 //求和函数  sum的结果会被缓存，如果依赖的数据没有改变就不会重新执行
				return this.products.reduce((prev, next) => {
					if(!next.select) return prev; //如果当前没有被选中，就不加当前这一项
					return prev + next.age * next.id
				}, 0)
			}
		/*	xian: { //计算评论里的数组长度来让评论框消失 
					if(this.adds.length ==1){
						return this.xian=false
					}else{
						return this.xian=true
					}
				},
				set(val) { //当给checkbox赋值的时候
					return this.products.forEach(item => item.select = val)
				}
			}*/
		},
		methods: {
			del(p){
				this.adds = this.adds.filter(item => item !== p); //es6写法
				localStorage.setItem('pzhi', JSON.stringify(this.adds));
				console.log(this.adds.length)
				if(this.adds.length ==0){
						return this.xian=false
					}
			},
			tijiao() {

				if(this.yonghu == '' || this.pinglun == '')  return;
				this.xian = true;
				this.adds.push({
					name: this.yonghu + '说:',
					describe: this.pinglun,
					shan:'删除',
					add_time:'2018-8-29 13:32:57 '
				});
				this.yonghu = "";
				this.pinglun = '';
				localStorage.setItem('pzhi', JSON.stringify(this.adds));
			},
			setOrderType(orderType) {
				this.orderType = orderType
			},
			add() {
				if(this.shuliang == '' || this.danjia == '') return;
				this.products.push({
					id: this.shuliang,
					age: JSON.parse(this.danjia),
					name: '小蕊',
					select: false
				});
				this.shuliang = "";
				this.danjia = "";
				console.log(this.products)
			},
			cancel() {
				this.cur = ''
			},
			remember(product) {

				this.cur = product;
			},
			parent() {
				alert('parent')
			},
			child() {
				alert('child')
			},
			grandson() {
				alert('grandson')
			},
			/*	sum() { //求和函数 写在方法里也行 但是会消耗性能 所以移上去 写在计算属性里面
					return this.products.reduce((prev, next) => {
						if(!next.select) return prev; //如果当前没有被选中，就不加当前这一项
						return prev + next.age * next.id
					}, 0)
				},*/
			remove(p) { //p代表当前点击的这一项 例如:【xxx,ppp,ooo,p】
				this.products = this.products.filter(item => item !== p) //es6写法
				/*var that=this;//es5写法
				that.products=that.products.filter(function(item){
					return item!==p
				})*/
			}
		/*	getData() {
				axios.get('http://192.168.0.121:3000/todos').then(res => {
					console.log(res.data[1])
					
					this.products = res.data[1]
					//this.products = JSON.parse(localStorage.getItem('zhi')) || this.products;
					console.log(this.products)
				}, err => {
					console.log(err)
					
				})
			}*/
			/*change() { //根据当前自己的状态设置其他状态 实现全选和反选
				this.products.forEach(item => item.select = this.checkAll)//es6写法
		
			},*/
			/*changeOne() { 根据下面选择的结果，控制上面全选的结果
				this.checkAll = this.products.every(item => item.select)
			}*/
		},
		watch: {
			a(newVal, oldVal) {
				console.log(newVal, oldVal)

			},
			products: {
				handler() {
					localStorage.setItem('zhi', JSON.stringify(this.products));

				},
				deep: true
			}

		},
		created() { //在数据初始化后被调用
		//	this.getData();
			
			this.adds = JSON.parse(localStorage.getItem('pzhi')) || this.adds;
			if(this.adds.length ==0){
				return this.xian=false
			}else{
				return this.xian=true
			}
			console.log(this.products)
			/*监控hash得变化*/
			this.hash = window.location.hash.slice(2) || ''
			window.addEventListener('hashchange', () => {
				console.log(window.location.hash)
				this.hash = window.location.hash.slice(2)
			}, false)
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.kuang {
		
		height: auto;
		border: 1px solid black;
	}
	.del{
		float: right;
		color:red;
		text-decoration: underline;
		cursor:pointer;
	}
</style>