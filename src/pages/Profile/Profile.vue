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
   <div class="es">
   <div class="es_icon">
    <span>普通登录</span>
    <i class="iconfont icon-jiantou1"></i>
   </div>
     <div class="es_icon1">
       <span>手机动态密码登录</span>
     </div>

   </div>
 </div>
  <!--手机密码验证-->
  <div class="content">
    <div class="mobile">
      <i class="iconfont icon-ren"></i>
      <input type="text" placeholder="手机号/邮箱/用户名">
      <hr>
    </div>

    <div class="mobile">
      <i class="iconfont icon-iconset0114"></i>
      <input type="password" placeholder="输入密码">
      <hr>
    </div>
  </div>
  <!--忘记密码-->
  <div class="mima">
    <a href="">忘记密码?</a>
  </div>

  <div class="login">
    <button>登录</button>
  </div>
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
