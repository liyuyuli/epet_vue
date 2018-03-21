<template>
  <div class="ff1">
    <!--分类列表-->
    <div class="list1 swiper-container" id="list">
      <div class="list2 swiper-wrapper">
        <ul class="list3 swiper-slide" >
          <li style="color: red">为你推荐</li>
          <li>e宠国际</li>
          <li>狗狗主粮</li>
          <li>狗狗零食</li>
          <li>狗狗服饰</li>
          <li>狗狗窝垫</li>
          <li>狗狗主粮</li>
          <li>狗狗主粮</li>
          <li>狗狗主粮</li>
          <li>狗狗主粮</li>
          <li>狗狗主粮</li>
          <li>狗狗主粮</li>
          <li>狗狗周边</li>
          <li>狗狗清洁</li>
        </ul>
      </div>

    </div>

    <div class="rightbox">
      <div class="box1">
        <a href="">热门分类</a>
        <ul class="boxs">
          <li>
            <img src="../8095e54e9414a06705acb7471eac7629.jpg" alt="">
            <p>肠胃调理</p>
          </li>
          <li>
            <img src="../8095e54e9414a06705acb7471eac7629.jpg" alt="">
            <p>肠胃调理</p>
          </li>
          <li>
            <img src="../8095e54e9414a06705acb7471eac7629.jpg" alt="">
            <p>肠胃调理</p>
          </li>
          <li>
            <img src="../8095e54e9414a06705acb7471eac7629.jpg" alt="">
            <p>肠胃调理</p>
          </li>
          <li>
            <img src="../8095e54e9414a06705acb7471eac7629.jpg" alt="">
            <p>肠胃调理</p>
          </li>
          <li>
            <img src="../8095e54e9414a06705acb7471eac7629.jpg" alt="">
            <p>肠胃调理</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .ff1
    width 100%
    height 670px
    #list
      width 75px
      float left
      height 670px

      .list2
        width 75px
        position fixed
        top 40px
        //left 0
        //bottom 0
        height 670px
        .list3
          width 75px
          height 670px

          li
            margin 30px 5px
    .rightbox
      height 100%
      margin-left 100px
      position fixed
      .box1
        padding 5px 5px 20px
        height 100%
        a
          font-size 12px
        .boxs
          li
            width 33.33%
            float left
            font-size 12px
            text-align center
            img
              display block
              height 80px
              width 80px
</style>
