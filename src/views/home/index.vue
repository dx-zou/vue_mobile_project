<template>
  <div class="app-view_wrapper">
    <div class="bg-mask" v-show="!navCollapse" @click="handleNavCollapse"></div>
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["navCollapse"])
  },
  mounted() {
    this.toGenCode();
  },
  methods: {
    handleNavCollapse() {
      this.$store.commit("CHANGE_NAVCOLLAPSE");
    },
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: $baseBgColor;
  .home-view_container {
    position: relative;
    flex: 1;
    padding-top: 140px;
    overflow-y: auto;
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
}
</style>
