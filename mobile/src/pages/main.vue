<template>
	<div id="app">

		<router-view />
		<mu-container id='footer'>
			<mu-bottom-nav :value.sync="id"  @change="changeHandle">
				<mu-bottom-nav-item value="1" to="/home?id=1" title="首页" color='success' icon="restore"></mu-bottom-nav-item>
				<mu-bottom-nav-item value="2" to='/recent?id=2' title="附近" icon="room"></mu-bottom-nav-item>
				<mu-bottom-nav-item value="3" to='/order?id=3' title="订单" icon="assignment"></mu-bottom-nav-item>
				<mu-bottom-nav-item value="4" to='/my?id=4' title="我的" icon="perm_identity"></mu-bottom-nav-item>
			</mu-bottom-nav>
		</mu-container>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				id: "1"

			}
		},
		computed: {
			/*	recruitScrollY() {
					return this.$store.state.recruitScrollY
				},
				recruitScrollY1() {
					return this.$store.state.recruitScrollY1
				}*/
		},
		methods: {
      changeHandle(value) {
       //

        this.id = value
      //  console.log(typeof(value))
      }
		},
		mounted: function() {
      this.$router.push('/home?id=1')
		},
		watch: {
			'$route' (to, from) {
        // this.$router.push({ //刷新回到首页
        // 	path: '/home?id=1'
        // });
        //console.log(from,to)
        if(to.query.id!='undefined'){
          // this.id = JSON.stringify(to.query.id)
     //  console.log(to.query.id)

          this.id = to.query.id

        }else{
         // alert(2)
         // this.id = 1;
        }


		/*		if(to.name === 'home') { //跳转的的页面的名称是"NewRecruit",这里就相当于我们listview页面，或者原始页面
					let recruitScrollY = this.$store.state.recruitScrollY
					window.scroll(0, recruitScrollY)
					console.log(recruitScrollY + '首页')
				};
				if(to.name === 'recent') { //跳转的的页面的名称是"NewRecruit",这里就相当于我们listview页面，或者原始页面
					let recruitScrollY1 = this.$store.state.recruitScrollY1
					window.scroll(0, recruitScrollY1)
					console.log(recruitScrollY1 + '附近')
				}*/

			}
		}
	}
</script>

<style scoped>
	#footer {
		min-width: 100%;
		position: fixed;
		bottom: 0;
		background-color: white;
    border-top: 1px solid #ecece7;
	}

	#footer .mu-bottom-item {
		min-width: 62px !important;
	}

	.mint-indicator-mask {
		top: 0;
		left: 0;
		position: fixed;
		width: 0 !important;
		height: 0 !important;
		opacity: 0;
		background: transparent;
	}

	.mu-bottom-item-active {
		padding-top: 6px;
		padding-bottom: 5px;
		color: #24b7ab !important;
	}

	.mu-bottom-item-active .mu-bottom-item-text {
		font-size: 14px;
		color: #24b7ab !important;
	}

	a {
		color: gray !important;
	}
</style>
