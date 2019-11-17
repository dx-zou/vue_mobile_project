<template>
  <footer class="app-footer">
    <router-link to="/home">
      <div class="iconfont icon-home"></div>
      <span>首页</span>
    </router-link>
    <router-link to="/category">
      <div class="iconfont icon-classify"></div>
      <span>分类</span>
    </router-link>
    <router-link to="/shopping-car">
      <div class="iconfont icon-shopcar"></div>
      <span>购物车</span>
    </router-link>
    <router-link to="/mine">
      <div class="iconfont icon-wode"></div>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style lang="scss" scoped>
.app-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: rem(5) 0;
  background-color: #fff;
  a {
    display: block;
    flex: 1;
    text-align: center;
    font-size: rem(12);
    color: #999;
    .iconfont {
      margin-bottom: rem(5);
      font-size: rem(18);
    }
    &.router-link-active {
      color: $baseThemeColor;
    }
  }
}
</style>
