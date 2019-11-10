import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store/index";
import "./styles/common.scss";
import moment from "moment";
import "./http/request";
import "./http/api";
// 引入nutui
import { DatePicker, Icon, Button } from "@nutui/nutui";
let components = [DatePicker, Icon, Button];
components.forEach(item => Vue.use(item));
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
Vue.use(preview);
// 时间过滤器
Vue.filter("filterTime", (timestr, patter = "YYYY-MM-DD") => {
  return moment(timestr).format(patter);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
