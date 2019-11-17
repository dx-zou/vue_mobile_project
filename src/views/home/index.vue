<template>
  <div class="app-view_wrapper">
    <app-header @handleNavChange="handleNavChange"></app-header>
    <div class="home-view_container">
      <component :is="componentId"></component>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppRecommend from "./components/AppRecommend";
export default {
  data() {
    return {
      componentId: "AppRecommend",
      componentList: ["AppRecommend"]
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppRecommend
  },
  methods: {
    handleNavChange(val) {
      this.componentId = this.componentList[val];
    }
  }
};
</script>

<style lang="scss" scoped>
.app-view_wrapper {
  padding: rem(85) 0 rem(55);
  height: 100vh;
  background-color: $baseBgColor;
}
</style>
