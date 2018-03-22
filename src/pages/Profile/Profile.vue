<template>
<div class="header">
 <div class="logo_bg">
   <div class="logo_title">
     <span @click="goto('/classify/brand')">
       <i class="iconfont icon-j123"></i>
     </span>
     <span>注册</span>
   </div>
   <div class="mlogo">
     <img src="./logo.png" alt="">
   </div>
   <div class="es_icon">
     <span @click="goto('/profile/password')">普通登录</span>
     <i class="iconfont icon-jiantou1" :class="{on:$route.path==='/profile/mobile'}"></i>
     <span @click="goto('/profile/mobile')">手机动态密码登录</span>
     <i class="iconfont icon-jiantou1" :class="{on:$route.path==='/profile/password'}" id="icon"></i>
   </div>
 </div>

  <keep-alive>
    <router-view/>
  </keep-alive>
  <div class="other_login">
    <p>合作网站登录</p>
    <img src="./login_ico2.png" alt="">
    <img src="./login_ico4.png" alt="">
  </div>
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
  @import "../../common/stylus/register.styl"


</style>
