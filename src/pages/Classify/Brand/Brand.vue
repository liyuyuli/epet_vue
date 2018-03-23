<template>
  <div class="d">
    <div style="padding-top: 40px">
      <div class="tab2" v-for="(brands,index) in brand" :key="index">
        <div class="tab2_title"  >
          <span>—{{brands.title}}—</span>
        </div>
        <div class="tab2_list">
          <ul class="tab2_cont">
            <li class="loading_img" v-for="(list,index) in brands.list" :key="index">
              <div class="tab2_loading">
                <img :src='list.logo' alt="">
              </div>
              <p>{{list.name}}</p>
              <p>{{list.address}}</p>
            </li>
           <!-- <li class="loading_img">
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
            </li>-->
            <!--<li class="loading_img">-->
            <!--<div class="tab2_loading">-->
            <!--<img src="../3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">-->
            <!--</div>-->
            <!--<p>冠能</p>-->
            <!--<p>美国</p>-->
            <!--</li>-->
          </ul>

        </div>
      </div>
    </div>
     <div class="ball">
      <span class="all" @click="$router.replace('/total')">全部</span>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BSscroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getBrand',()=>{
        this.$nextTick(()=>{
          new BSscroll('.d', {
            click:true,
          })
        })
      })


    },
    computed:{
      ...mapState(['brand'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
.d
  position absolute
  top 0px
  bottom 0
  overflow hidden
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
        .loading_img
          flex 0 33.33%
          overflow hidden
          font-size 12px
          text-align center
          padding-bottom 20px
          .tab2_loading
            border 1px solid ;
            width 90%
            margin 0 auto
            img
              margin 10px auto
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
