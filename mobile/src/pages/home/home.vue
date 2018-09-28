<template>
	<div>
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
		data() {
			return {

			}
		},
		components: {
			navigation,
			broadcast,
			middle
		},
	/*		beforeRouteLeave(to, from, next) {
				let position = window.scrollY //记录离开页面的位置

				if(position == null) position = 0
				this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来
				next()
				//alert(position + '--离开首页')
		},*/
		watch: {

		}
	}
</script>

<style>

</style>
