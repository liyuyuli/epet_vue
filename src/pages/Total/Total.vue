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
  <div class="allBrand">
    <div class="content" v-for="(c,index) in allbrands.brand" :key="index">
      <h2>{{c.order}}</h2>
      <div class="a4" v-for="(a,index) in c.list" :key="index">
        <div class="a1">
          <img :src="a.logo" alt="" class="a3">
        </div>
        <div class="a2">
          <p class="ft1">艾尔</p>
          <p class="ft2">中国</p>
        </div>

      </div>


    </div>

    <div class="aa">
        <ul class="a1">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
        </ul>
      </div>



  </div>

</div>
</template>

<script>
  import {mapState} from 'vuex'
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
    },
    mounted(){
      this.$store.dispatch('getAllBrands')
    },
    computed:{
      ...mapState(['allbrands'])
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



  .allBrand
    width 100%
    .content
      width 100%

      h2
        background #f3f4f5
        height 24px
        line-height 24px
        margin-top -8px
      .a4
        display flex
        border-bottom 1px solid #f3f4f5
      .a1
        border 1px solid #7e8c8d
        margin 10px 10px

        .a3
          display block
          height 40px
          margin 0 auto

      .a2

        margin-top 15px

        .ft1
          font-size 14px
          margin-bottom 5px
        .ft2
          font-size 12px



    .aa
      position fixed
      right 5px
      top 150px

</style>
