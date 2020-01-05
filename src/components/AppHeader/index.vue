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
            :class="['nav-item', activeNav === index ? 'active-item' : '']"
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
            <nut-button
              type="light"
              small
              v-for="(item, index) in navList"
              :key="item"
              :class="index === 3 && 'none-margin_right'"
            >
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
    /**
     * @description init betterScroll
     */
    initBetterScroll() {
      this.scroll = new BScroll(".header-nav", {
        startX: 0,
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical",
        click: true
      });
    },
    /**
     * @description 导航栏点击事件
     * @params {Number} index 导航索引
     */
    handleNavClick(index) {
      this.activeNav = index;
      this.$emit("handleNavChange", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header-container {
  position: relative;
  overflow: hidden;
}
.header-bar {
  position: fixed;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
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
  padding: 0.1rem 0;
  .header-icon {
    margin: 0 0.2rem;
  }
  .header-left {
    .iconfont {
      font-size: 0.6rem;
      color: #ff6b00;
    }
  }
  /* onepx_mixin.scss */
  .header-middle {
    @include onePxBorder((top, right, bottom, left), #e5e5e5, 3px);
    flex: 1;
    height: 60px;
    line-height: 60px;
    background: #fff;
    color: rgba(0, 0, 0, 0.3);
    .iconfont {
      margin: 0 0.15rem;
      font-size: 0.35rem;
    }
  }
  .header-right {
    .iconfont {
      font-size: 0.5rem;
    }
  }
}
.header-nav {
  position: relative;
  overflow: hidden;
  padding: 0.1rem 0.2rem 0;
  .header-nav-wrapper {
    width: 120%;
    .nav-item {
      display: inline-block;
      padding: 0 0.3rem;
      font-size: 0.23rem;
      cursor: pointer;
      span {
        display: inline-block;
        padding-bottom: 0.1rem;
      }
    }
    .active-item {
      color: $baseThemeColor;
      span {
        border-bottom: 0.02rem solid $baseThemeColor;
      }
    }
    .nav-item-extra {
      display: inline-block;
      padding-right: 0.5rem;
    }
  }
  .nav-display {
    position: absolute;
    width: 0.6rem;
    height: 0.4rem;
    right: 0;
    top: 0.05rem;
    text-align: center;
    line-height: 0.4rem;
    background-color: $baseBgColor;
  }
  .nav-all {
    .nav-all-wrap {
      display: flex;
      flex-wrap: wrap;
      .nut-button {
        height: 60px;
        width: 150px;
        margin: 0 0.28rem 0.1rem 0;
        font-size: 0.2rem;
      }
      .none-margin_right {
        margin-right: 0;
      }
    }
    .nav-all-top {
      font-size: 0.3rem;
      margin-bottom: 0.1rem;
    }
  }
}
.bg-mask {
  position: fixed;
  max-width: 750px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
