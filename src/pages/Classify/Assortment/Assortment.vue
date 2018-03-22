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
      <div class="box2">
        <a href="">
          热门品牌
        </a>
        <img src="./cate_right_img.png" alt="" class="t1">
        <ul class="box3">
          <li>
            <img src="./7e157e3b5b1303aa4a4107f76ddab4cd.jpg" alt="">
            <p>海洋之星Fish4Dogs</p>
          </li>
          <li>
            <img src="./16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
            <p>海洋之星Fish4Dogs</p>
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
      position relative
      .box1
        padding 5px 5px 20px
        position absolute
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
      .box2
        position absolute
        top 230px

        a
         font-size 12px

        .t1
          height 10px
          margin-left 200px

        .box3
          text-align center
          display flex
          justify-content space-around
          margin-top 20px
          img
            height 45px
            width 80px
            padding 5px 5px 20px
</style>
