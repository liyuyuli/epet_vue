<template>
<div class="header">
  <div class="header_tip" >
      <span >
       <i class="iconfont icon-j123" @click="$router.replace('/classify/brand')"></i>
     </span>
    <span>全部品牌</span>
    <i class="iconfont icon-wo" @click="toggleShow"></i>
  </div>
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
  <div class="content">
    <h2>A</h2>
    <div></div>
  </div>
</div>
</template>

<script>
  export default {

    data(){
      return{
        showDetail:false
      }

    },
    methods:{
      toggleShow(){
        this.showDetail = !this.showDetail
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    .header_tip
      width 90%
      bottom-border-1px (#e4e4e4)
      height 35px
      display flex
      text-align center
      margin 10px 10px
      justify-content space-between
      font-size 18px
  /*隐藏与显示*/
      .show_detail
        display flex
        color #999
        box-sizing border-box
        height 60px
        border-bottom 1px solid  #999
        width 100%
        overflow hidden
        margin-bottom 5px

        .nav_item
          width 100%
          flex 1
          text-align center
          margin-top 10px
          .num
            font-style normal
            position: relative
            top -47px
            right -14px
            display inline-block
            height 20px
            width 20px
            line-height 20px
            background red
            text-align center
            border-radius 20px
            color white

          &p
            font-size 12px


          .iconfont
            font-size 26px


        &.fade-enter,&.fade-leave-to
          height 0
        &.fade-enter-active,&.fade-leave-active
          transition height .5s linear



    .content
      width 100%
      h2
        background #999
        height 24px
        line-height 24px
        margin-top -8px
</style>
