<template>
<div class="footer_guide ">
  <span class="guide_item" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
    <span>首页</span>
  </span>
  <span class="guide_item" :class="{on: $route.path==='/classify'}" @click="goto('/classify')">
    <span class="item_icon">
     <i class="iconfont icon-icon04"></i>
    </span>
    <span>分类</span>
  </span>
  <span class="guide_item" :class="{on: $route.path==='/shopcart'}" @click="goto('/shopcart')">
    <span class="item_icon">
     <i class="iconfont icon-03"></i>
    </span>
    <span>购物车</span>
  </span>
  <span class="guide_item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
   <span class="item_icon">
      <i class="iconfont icon-gou"></i>
    </span>
    <span>我的E宠</span>
  </span>
</div>
</template>

<script>
  export default {
    methods:{
      goto(path){
    this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 200
    left 0
    right 0
    bottom 0
    margin-top 46px
    background-color #fff
    width 100%
    height 46px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin-bottom  5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
