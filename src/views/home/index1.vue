<template>
  <div class="app-view_wrapper">
    <app-header @handleNavChange="handleNavChange" />
    <div class="home-view_container">
      <component :is="componentId"></component>
      <img :src="codeSrc" alt="二维码" />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppRecommend from "./components/AppRecommend";
import QRCode from "qrcode";
export default {
  data() {
    return {
      componentId: "AppRecommend",
      componentList: ["AppRecommend"],
      codeSrc: ""
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppRecommend
  },
  mounted() {
    this.toGenCode();
  },
  methods: {
    handleNavChange(val) {
      this.componentId = this.componentList[val];
    },
    async toGenCode() {
      const options = {};
      const url = window.location.href;
      try {
        this.codeSrc = await QRCode.toDataURL(url, options);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-view_wrapper {
  padding: 1.4rem 0;
  height: 100vh;
  background-color: $baseBgColor;
}
</style>
