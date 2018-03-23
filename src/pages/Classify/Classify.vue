<template>
<div class="classify">
  <!--头部-->
  <div class="classify_header">
   <div class="b1" @click="goto('/classify/assortment')">
     <span class="s1" :class="{on:$route.path==='/classify/assortment'}">分类</span>
   </div>
    <div class="b1" @click="goto('/classify/brand')" >
      <span class="s2" :class="{on:$route.path==='/classify/brand'}">品牌</span>
      <span class="s3"><i class="iconfont icon-sousu"></i></span>
    </div>
 </div>
  <!--列表-->

  <!--品牌-->
  <router-view></router-view>


</div>
</template>
<script>

  import ShopList from '../../components/ShopList/ShopList'

  export default {

    mounted(){
      this.$store.dispatch('getCategorys')


    },
    components:{
      ShopList
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/classify.styl"



</style>
