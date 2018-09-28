<template>
	<div>
		订单
    <p> {{count}}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
	</div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    nme:'#my',
    data(){
      return{

      }
    },
    methods:{

      ...mapMutations(['add', 'reduce']),
    },
    computed: {
      ...mapState(['count'])

    },
    watch:{

    }

  }
</script>

<style>
</style>
