import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store";
import "./styles/common.scss";
import "animate.css";
import service from "./http/request";
import API from "./http/api";
// 引入nutui
import { DatePicker, Icon, Button } from "@nutui/nutui";
let components = [DatePicker, Icon, Button];
components.forEach(item => Vue.use(item));
// 引入VueLazyload 懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
// 引入图片预览
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
Vue.use(preview);

// 挂载全局实例属性
Vue.prototype.$api = API;
Vue.prototype.$http = service;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
