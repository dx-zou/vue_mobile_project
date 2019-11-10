<template>
  <div class="app-header-container">
    <div class="bg-mask" v-if="!navCollapse" @click="navCollapse = true"></div>
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
        <div class="header-nav-wrapper" v-if="navCollapse">
          <div
            slot="list"
            v-for="(item, index) of navList"
            :key="index"
            class="nav-item"
            :class="activeNav === index ? 'active-item' : ''"
            @click="handleNavClick(index)"
          >
            <span>
              {{ item }}
            </span>
          </div>
        </div>
        <div class="nav-all" v-else>
          <div class="nav-all-top">全部</div>
          <div class="nav-all-wrap">
            <nut-button type="light" small v-for="item in navList" :key="item">
              {{ item }}
            </nut-button>
          </div>
        </div>
        <div class="nav-display" @click="navCollapse = !navCollapse">
          <i :class="['iconfont', navCollapse ? 'icon-down' : 'icon-up']"></i>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      navList: ["推荐", "手机", "智能", "电视", "笔记本", "家电", "生活周边"],
      activeNav: 0,
      scroll: null,
      navCollapse: true
    };
  },
  mounted() {
    this.initBetterScroll();
  },
  methods: {
    initBetterScroll() {
      this.scroll = new BScroll(".header-nav", {
        startX: 0,
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical",
        click: true
      });
    },
    handleNavClick(index) {
      this.activeNav = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header-container {
  max-width: 640px;
  margin: 0 auto;
  overflow: hidden;
}
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $baseBgColor;
  z-index: 99;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  .header-icon {
    margin: 0 15px;
  }
  .header-left {
    .iconfont {
      font-size: 35px;
      color: #ff6b00;
    }
  }
  /* onepx_mixin.scss */
  .header-middle {
    @include onePxBorder((top, right, bottom, left), #e5e5e5, 5px);
    flex: 1;
    height: 35px;
    line-height: 35px;
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
  position: relative;
  padding: 10px 10px 0;
  .header-nav-wrapper {
    width: 150%;
    .nav-item {
      display: inline-block;
      padding: 0 15px;
      font-size: 15px;
      cursor: pointer;
      span {
        display: inline-block;
        padding-bottom: 5px;
      }
    }
    .active-item {
      color: $baseThemeColor;
      span {
        border-bottom: 2px solid $baseThemeColor;
      }
    }
    .nav-item-extra {
      display: inline-block;
      padding-right: 50px;
    }
  }
  .nav-display {
    position: absolute;
    width: 50px;
    height: 33px;
    right: 0;
    top: 0px;
    text-align: center;
    line-height: 40px;
    background-color: $baseBgColor;
  }
  .nav-all {
    .nav-all-wrap {
      display: flex;
      flex-wrap: wrap;
      .nut-button {
        margin: 0 10px 10px 0;
      }
    }
    .nav-all-top {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
}
.bg-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
