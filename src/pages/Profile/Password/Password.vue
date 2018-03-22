<template>
  <div class="es" >

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
    <div class="mima">
      <a href="">忘记密码?</a>
    </div>

    <div class="login" >
      <button>登录</button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .es
    width 100%
    overflow hidden
    line-height 44px
    color white

    .mobile
      font-size 15px
      color #d7d7d7
      margin 15px 15px
      input
        height 30px


    .mima
      width 100%
      a
        font-size 14px
        margin-left 300px
    .login
      width 90%
      margin  10px auto
      button
        border-radius 8px
        height 38px
        width 345px
        background #2ec975
        color white
        font-size 15px
        border 0

</style>
