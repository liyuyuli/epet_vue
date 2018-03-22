<template>
<div class="wap_top">
<!--头部-->

  <div class="header_tip" >
      <span @click="goto('/classify/brand')">
       <i class="iconfont icon-j123"></i>
     </span>
      <span>购物车</span>
      <i class="iconfont icon-wo" @click="toggleShow"></i>
  </div>
  <!--隐藏图标-->
  <transition name="fade">
    <div class="show_detail" v-if="showDetail">
      <div class="nav_item">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </div>
      <div class="nav_item">
        <i class="iconfont icon-wen"></i>
        <p>商品分类</p>
      </div>
      <div class="nav_item">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
        <em class="num">0</em>
      </div>
      <div class="nav_item">
        <i class="iconfont icon-gou"></i>
        <p>我的e宠</p>
      </div>
    </div>
  </transition>

  <!--购物车图标-->
  <div class="mycart">
    <div class="cart1" id="cart1">

    </div>
    <div class="cart1">
      <span style="color: #ebebeb; ">购物车是空的</span>
    </div>
    <div class="cart1" style="margin-top: 8px;" >
      <button >去逛逛</button>
      <button >我的收藏</button>
    </div>
  </div>


</div>
</template>

<script>
  export default {
      name:'wap_top',
    data(){
        return{
          showDetail:false
        }

  },
    methods:{
      goto(path){
        this.$router.replace(path)

      },
      toggleShow(){
       this.showDetail = !this.showDetail
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/gouwu.styl"

</style>
