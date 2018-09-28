<template>
  <div id="app">
    <!--<keep-alive>-->
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive '></router-view>
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive'></router-view>
    <!--</keep-alive>-->
   <!-- <router-view v-if="!$route.meta.keepAlive"></router-view>-->
    <!--<navigation>-->
      <!--<router-view/>-->
    <!--</navigation>-->
   <!-- <keep-alive>-->
     <!-- <router-view/>-->
   <!-- </keep-alive>-->
  </div>
</template>

<script>
  import  {mapActions} from 'vuex'
export default {
  name: 'App',
  mounted(){
    //this.$store.dispatch('getaddress')
   this.getaddress()
   this.getid()
  },
  methods:{
    ...mapActions(['getaddress','getid'])
  }

}
</script>

<style>

</style>
