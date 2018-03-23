<template>
  <div class="ff1">
    <!--分类列表-->
    <div class="list1" id="list">
      <div class="list2 menu-wrapper ">
        <ul class="list3 menu-wrapper-list" >
          <li class="menu-wrapper-item"
              v-for="(name,index) in categorys"
              :key="index" :class="{on:index ===currentIndex}" @click="setCurrentIndex(index)">{{name.name}}</li>
          <!--<li class="menu-wrapper-item">e宠国际</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗零食</li>-->
          <!--<li class="menu-wrapper-item">狗狗服饰</li>-->
          <!--<li class="menu-wrapper-item">狗狗窝垫</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗主粮</li>-->
          <!--<li class="menu-wrapper-item">狗狗周边</li>-->
          <!--<li class="menu-wrapper-item">狗狗清洁</li>-->
        </ul>
      </div>

    </div>
    <div v-if="cate_list.length" class="right" style="height: 500px;">
        <div class="rightbox"  >
          <div v-for="(a,index) in cate_list" :key="index" class="t2">
            <div class="box1" v-if="a.type===0">
              <div  >
                <a href="">{{a.title}}</a>
                <img src="./cate_right_img.png" alt="" class="t1">
              </div>

              <ul class="boxs">
                <li v-for="(b,index) in a.list" :key="index">
                  <img :src="b.photo ||b.logo" alt="">
                  <p>{{b.name}}</p>
                </li>
                <!-- <li>
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
                 </li>-->
              </ul>

            </div>
            <div class="box2" v-else>

              <a href="">
               {{a.title}}
               </a>

              <ul class="box3">
                <li v-for="(b,index) in a.list" :key="index">
                  <img :src="b.logo ||b.photo" alt="">
                  <p>{{b.name}}</p>
                </li>
                <!-- <li>
                   <img src="./16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                   <p>海洋之星Fish4Dogs</p>
                 </li>-->
              </ul>

            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        currentIndex:0
      }
    },
    mounted(){

    },
    methods:{
      setCurrentIndex(index){
        this.currentIndex = index
      }
    },

    computed:{
      ...mapState(['categorys']),
      cate_list(){
        const {categorys,currentIndex} =this
        if(categorys.length){
          return categorys[currentIndex].cate_list
        }
        return []
      }
    },
    watch:{
      categorys(){
        this.$nextTick(()=>{
          new BScroll('.menu-wrapper',{
            scrollY:true,
            click:true
          })
          new BScroll('.right',{
            scrollY:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .ff1
    width 100%
    height 600px
    .list1
      width 70px
      overflow hidden
      position absolute
      .menu-wrapper
        width 70px
        height 600px
        .menu-wrapper-list
          .on
            color red
          .menu-wrapper-item
            box-sizing border-box
            height: 60px;
            width: 70px;
            padding: 15px 0
            line-height: 14px;
            text-align center



    .rightbox
      float right
      margin-left 120px
      height 100%
      overflow hidden


      .box1
        position relative
        overflow hidden
        a
          font-size 12px
          margin-top 10px
        .t1
          height 10px
          margin-top 10px
          margin-left 150px
        ul
          overflow hidden
          li
            /*width 33.333%*/
            float left
            img
              width 60px
              height 60px
              margin 5px 10px
            p
              font-size 12px
              text-align center




      .box2
        position absolute
        margin-top 20px
        a
          font-size 12px
        .box3
          margin-top 10px
          li
            float left
            width 80px
            padding 0 20px
            img
              width 80px
              height 60px
              display block
              float left





</style>
