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
    <div class="index_bottom " >
      <div class="index_content swiper-container" id="index_bottom">
        <ul class="index_list swiper-wrapper">
          <li  class="swiper-slide "
               v-for="(menu,index) in homepages.menus"
               :key="index"
               :class="{on:index === currentIndex}"  @click="setCurrentIndex(index)">{{menu.menu_name}}</li>
          <!--<li>狗狗主粮</li>
          <li>服饰城</li>
          <li>医疗保健</li>
          <li>零食玩具</li>
          <li>日用外出</li>
          <li>美容香波</li>-->
        </ul>
      </div>
    </div>
  </div>

  <div class="nav  ">
    <!--图片轮播-->
    <div class="swiper-content nav-content">
      <div class="swiper-container nav-container">
        <div class="nav_content swiper-wrapper ">
          <div class="nav_images swiper-slide ">
            <img class="bg1 " src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
          </div>
          <div class="nav_images swiper-slide ">
            <img class="bg2 " src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
          </div>

          <div class="nav_images swiper-slide ">
            <img class="bg2 " src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
          </div>
          <div class="nav_images swiper-slide ">
            <img class="bg2 " src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
          </div>
          <div class="nav_images swiper-slide ">
            <img class="bg2 " src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
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

    <!--抢购物品-->
    <Rush/>
    <!--横线-->
     <div class="x_line">
    <div class="page_line"></div>
  </div>
    <div class="e_chong">
      <div class="e_img">
        <div class="e_div">
          <a href="">
            <img src="./images/1ec9379f83eb421db9a09195c9594e29.jpg" alt="" style="height: 250px">
          </a>

        </div>
        <div class="e_div">
          <a href=""><img src="./images/6c2998af853e701a2f884b92066058e5.jpg" alt=""></a>
          <a href=""><img src="./images/6c2998af853e701a2f884b92066058e5.jpg" alt=""></a>
        </div>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
<!--E秒团商品预告-->
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/da7ce5c4cfccf8669eebb227b2f6b522.jpg" alt=""></a>
      </div>
    </div>

    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <!--潮品视频-->

      <div class="clum_tit">
        <div class="leftimg">
          <img src="./images/38688d8d92c7da7aae64eda8b8bb3a94.jpg" alt="">
        </div>
        <div class="more_titclass">
            <a href="">更多</a>
            <i class="iconfont icon-right"></i>
        </div>
      </div>

    <div class="fashion">
      <div class="videList">
        <img src="./images/61023e6ce2a6fb3f198400747eccf4b0.jpg" alt="">
      </div>
      <div class="vidotext">
        <div>Industripet 缓食狗碗 狗子告别狼吞虎咽 </div>
        <div class="vide_num">
          <span>81303</span>|
          <span>01:43</span>
        </div>

      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>

    <div class="divimg_box">
      <div class="divimg">
        <img src="./images/4c32811744e04f6b63632b42a0d5325d.jpg" alt="">
        <img src="./images/6e3a2cb186e1028d481940c42fb54732.jpg" alt="">
      </div>
      <div class="divimg">
        <img src="./images/6e3a2cb186e1028d481940c42fb54732.jpg" alt="">
        <img src="./images/6e3a2cb186e1028d481940c42fb54732.jpg" alt="">
      </div>
    </div>

    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>

<!--品牌特卖-->
    <div class="clum_tit">
      <div class="leftimg">
        <img src="./images/11acf905ca327ed7aae8f9b4851850a0.jpg" alt="">
      </div>
      <div class="more_titclass">
        <a href="">更多</a>
        <i class="iconfont icon-right"></i>
      </div>
    </div>

    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>

    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>
    <div class="banner_item">
      <div >
        <a href=""><img src="./images/6fa1223b6ad85e77ad639a8ca00c5e00.jpg" alt=""></a>
      </div>
    </div>
    <!--横线-->
    <div class="x_line">
      <div class="page_line"></div>
    </div>

    <!--萌抓联盟-->
    <div class="clum_tit">
      <div class="leftimg">
        <img src="./images/79d53b0ab1c8a630802d74b5beb0a632.jpg" alt="">
      </div>
      <div class="more_titclass">
        <a href="">更多</a>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <!--图片轮播-->
    <div class="banner_item">
      <div class="swiper-container" id="banner_item">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/b073c19240df889b01e80049269cc8e9.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/88e109afbed0ddf3858afd92841010af.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/5cb345f0e7eea8c0cf01cb5d61f25536.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!--萌宠说-->
    <div class="clum_tit">
      <div class="leftimg">
        <img src="./images/77c0017136e51145788b7607a3a0914c.jpg" alt="">
      </div>
      <div class="more_titclass">
        <a href="">更多</a>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="fashion">
      <div class="videList">
        <img src="./images/5837d50b4993a5de2aff2b26ce8cf3d.png" alt="">
      </div>
      <div class="vidotext">
        <div>第3期-汪星人你的大姨妈来了吗？ </div>
        <div class="vide_num">
          <span>81303</span>|
          <span>01:43</span>
        </div>

      </div>
    </div>

    <!--小剧场-->
    <div class="clum_tit">
      <div class="leftimg">
        <img src="./images/77c0017136e51145788b7607a3a0914c.jpg" alt="">
      </div>
      <div class="more_titclass">
        <a href="">更多</a>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="fashion">
      <div class="videList">
        <img src="./images/9a69149e95bdf03b3957262f2375d27b.png" alt="">
      </div>
      <div class="vidotext">
        <div>被宠物医院坑过的那些事儿 </div>
        <div class="vide_num">
          <span>17543</span>|
          <span>03：38</span>
        </div>

      </div>
    </div>

    <div class="title_bg">
      <div class="title_img">
        <img src="./images/be84f01e893b0e631d8512566eb79117.jpg" alt=""></div>
    </div>

    <div class="title_footer">
      <div class="title_bot">
        <span style="color: red">触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
      <div class="title_bot" >
        <span>© wap.epet.com 版权：重庆易宠科技有限公司</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Swiper from 'swiper'
  import Rush from '../../components/Rush/Rush'
  import {mapState} from 'vuex'

  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        currentIndex : 0
      }
    },
    methods:{
      setCurrentIndex(index){
        this.currentIndex = index
      }
    },
    mounted(){
      new Swiper('.swiper-content>.swiper-container', {
        loop: true,
        // slidesPerView: 3.5,
        // spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      })
      new Swiper('#wrapper_goods',{
        slidesPerView: 3.5,
        spaceBetween: 10,
      })

      new Swiper('#banner_item',{
        loop: true,
        // slidesPerView: 3.5,
        // spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      })


    //  通知action异步获取homepage
      this.$store.dispatch('getShopNav',()=>{
        this.$nextTick(()=>{
          new  Swiper('#index_bottom',{
            slidesPerView:5,
            spaceBetween: 8
          })
        })
      })

    },
    components:{
      Rush,

    },
    computed:{
      ...mapState(['homepages'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/shouye.styl"

</style>
