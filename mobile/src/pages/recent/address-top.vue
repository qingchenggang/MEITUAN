<template>
  <div>
    <div class="footer">
      <div>
        <span class="address-icon"></span>
        <span class="address">&#xe6d9;{{address.city}}</span>
        <input type="text" class="search_input">
      </div>
    </div>
  </div>
</template>

<script>


  import {mapState} from 'vuex'
    export default {
        name: "address-top",
      data(){
          return{

          }
      },
      computed: {
        ...mapState(['address']),
      }
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    border-bottom: 0.5px solid gray;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: white;
  }
  .address{
    width: 100px;
    overflow:hidden;
    display: inline-block;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 16px;

    font-family: 'iconfont';  /* project id 836071 */
    color: gray;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 836071 */
    src: url('//at.alicdn.com/t/font_836071_5praccrcxkg.eot');
    src: url('//at.alicdn.com/t/font_836071_5praccrcxkg.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_836071_5praccrcxkg.woff') format('woff'),
    url('//at.alicdn.com/t/font_836071_5praccrcxkg.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_836071_5praccrcxkg.svg#iconfont') format('svg');
  }

  .search_input {
    width: 170px;
    height: 30px;
    position: relative;
    top: -6px;
    margin-top: 10px;
    margin-left: 10px;
    padding-left: 10px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid gray;
  }

</style>
