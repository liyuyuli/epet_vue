<template>
  <div class="tab2">
    <div class="tab2_title">
      <span>—推荐品牌—</span>
    </div>
    <div class="tab2_list">
      <ul class="tab2_cont">
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
          <div class="tab2_loading">
            <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
          </div>
          <p>冠能</p>
          <p>美国</p>
        </li>
        <li class="loading_img">
        <div class="tab2_loading">
          <img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
        </div>
        <p>冠能</p>
        <p>美国</p>
      </li>
        <!--<li class="loading_img">-->
          <!--<div class="tab2_loading">-->
            <!--<img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">-->
          <!--</div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</li>-->
      </ul>

    </div>
    <div class="ball">
      <span class="all" @click="$router.replace('/total')">全部</span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .tab2
    width 100%
    .tab2_title
      width 100%
      text-align center
      font-size 12px
      color #999
      padding 20px 0
    .tab2_list
      width 100%
      .tab2_cont
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-between
        .loading_img
          font-size 12px
          text-align center
          padding-bottom 20px
          .tab2_loading
            border 1px solid #e2e2e2
            padding 10px 20px
            img
              height 40px
              display block
              line-height 40px
              vertical-align middle
    /*全部*/
    .ball
      text-align center
      color white
      font-size 14px
    .all
      display block
      width 40px
      height 40px
      position fixed
      right 6px
      bottom 54px
      background rgba(0,0,0,0.4)
      border-radius 50%
      line-height 40px
</style>
