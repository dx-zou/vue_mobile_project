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
  max-width: 640px;
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
  padding: 0.05rem 0;
  .header-icon {
    margin: 0 rem(15);
  }
  .header-left {
    .iconfont {
      font-size: 0.4rem;
      color: #ff6b00;
    }
  }
  /* onepx_mixin.scss */
  .header-middle {
    @include onePxBorder((top, right, bottom, left), #e5e5e5, 5px);
    flex: 1;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #fff;
    color: rgba(0, 0, 0, 0.3);
    .iconfont {
      margin: 0 0.08rem;
    }
  }
  .header-right {
    .iconfont {
      font-size: 0.4rem;
    }
  }
}
.header-nav {
  position: relative;
  overflow: hidden;
  padding: 0.1rem 0.1rem 0;
  .header-nav-wrapper {
    width: 120%;
    .nav-item {
      display: inline-block;
      padding: 0 0.2rem;
      font-size: 0.18rem;
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
        margin: 0 0.1rem 0.1rem 0;
      }
    }
    .nav-all-top {
      font-size: 0.16rem;
      margin-bottom: 0.1rem;
    }
  }
}
.bg-mask {
  position: fixed;
  max-width: 640px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
