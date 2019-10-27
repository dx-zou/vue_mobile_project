import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/index";
import "./styles/common.scss";
import moment from "moment";
import "./http/request";
import "./http/api";
import {
  Field,
  Button,
  Picker,
  Popup,
  Cell,
  CellGroup,
  DatetimePicker,
  Tab,
  Tabs,
  Card,
  Toast,
  CountDown,
  Area
} from "vant";

let components = [
  Field,
  Button,
  Picker,
  Popup,
  Cell,
  CellGroup,
  DatetimePicker,
  Tab,
  Tabs,
  Card,
  Toast,
  CountDown,
  Area
];
components.forEach(item => Vue.use(item));
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
