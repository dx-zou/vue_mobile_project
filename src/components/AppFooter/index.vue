<template>
  <footer class="app-footer">
    <router-link to="/">
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
  padding: 0.1rem 0;
  background-color: #fff;
  a {
    display: block;
    flex: 1;
    text-align: center;
    font-size: 0.18rem;
    color: #999;
    .iconfont {
      margin-bottom: 0.05rem;
      font-size: 0.4rem;
    }
    &.router-link-exact-active {
      color: $baseThemeColor;
    }
  }
}
</style>
