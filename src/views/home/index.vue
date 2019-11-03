<template>
  <div class="home-container">
    <header class="header-bar">
      <div class="header-wrapper">
        <div class="header-left">
          <i class="iconfont icon-xiaomi header-icon"></i>
        </div>
        <div class="header-middle">
          <i class="iconfont icon-search"></i>
          搜索商品名称
        </div>
        <div class="header-right">
          <i class="iconfont icon-wode header-icon"></i>
        </div>
      </div>
      <div class="header-nav">
        <span>1px 边框</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getTableData() {}
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  background-color: $baseBgColor;
  .header-icon {
    margin: 0 15px;
  }
  .header-left {
    .iconfont {
      font-size: 35px;
      color: #ff6b00;
    }
  }

  .header-middle {
    border: 1px solid #e5e5e5;
    flex: 1;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    background: #fff;
    color: rgba(0, 0, 0, 0.3);
    .iconfont {
      margin: 0 8px;
    }
  }
  .header-right {
    .iconfont {
      font-size: 26px;
    }
  }
}
.header-nav {
  @include thinBorder((top, right, bottom, left), red, (5px, 5px, 5px, 6px));
}
</style>
