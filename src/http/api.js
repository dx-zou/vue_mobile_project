import Vue from "vue";
// const BASE_URL = "http://192.168.0.84:8087"; // 测试服务
const API = {
  BASE_URL: "http://192.168.0.129:8087"
};
Vue.prototype.$api = API;
export default {
  API
};
