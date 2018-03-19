<template>
<div id="apps">
  <!--头部-->
  <div class="msite">
    <!--搜素区-->
    <div class="index_top">
      <div class="msite_1">
        <a href="">
          <span>狗狗</span>|
          <span>重庆</span>
          <i class="iconfont icon-jiantou"></i>
        </a>
      </div>
      <div class="msite_2">
        <span>
           <input type="search" placeholder="搜索商品和品牌">
           <i class="iconfont icon-sousu"></i>
        </span>
      </div>
      <div class="msite_3">
        <span>
          <i class="iconfont icon-xiaoxi"></i>
        </span>
      </div>
    </div>
    <!--导航条-->
    <div class="index_bottom">
      <div class="index_content">
        <ul class="index_list">
          <li class="on">首页</li>
          <li>狗狗主粮</li>
          <li>服饰城</li>
          <li>医疗保健</li>
          <li>零食玩具</li>
          <li>日用外出</li>
          <li>美容香波</li>
        </ul>
      </div>
    </div>
  </div>
  <!--内容区-->
  <div class="nav">
    <!--图片轮播-->
    <div class="nav_content">
      <div class="nav_images">
        <img class="bg1" src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="">
        <img class="bg2" src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
        <img class="bg3" src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="">
        <img class="bg4" src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="">
        <img class="bg5" src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="">
      </div>
    </div>
<!--列表-->
    <div class="column">
      <div class="column_div">
        <ul class="column_top">
          <li><a href=""><img src="./images/4e820b334820dbb62178bd367cdd7ba6.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/9d335309be26f610a043e3bcc1e84b31.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
         </ul>
        <ul class="column_bottom">
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
          <li><a href=""><img src="./images/f1d45afa77b1844883595df4be0b6b50.jpg" alt=""></a></li>
        </ul>
      </div>
    </div>
    <!--新人专享-->
    <div class="logo">
      <a href="" >
        <img  class="logo_img" src="./images/60c354a5d94be9fd114523ee77259c73.gif" alt="">
      </a>
    </div>
    <!--每日疯抢-->
    <div class="crazy">
      <div class="crazy_time">
        <div class="crazy_image">
          <img src="./images/03.png" alt="">
        </div>
        <div class="crazy_end" >
          <span>本场结束</span>
          <span class="time">16</span>
          <span>：</span>
          <span class="time">00</span>
        </div>
        <div class="more">
          <a href="" class="more_goods">更多</a>
          <i class="iconfont icon-right"></i>
        </div>
      </div>

      <div class="crazy_goods"></div>
    </div>

  </div>
</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/shouye.styl"

</style>
