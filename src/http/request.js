import axios from "axios";
import config from "./api";
const service = axios.create({
  baseURL: config.API.BASE_URL,
  timeout: 30000
});
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 设置请求头信息
    config.headers.authorization = sessionStorage.getItem("token") || "";
    config.headers.post["Content-Type"] = "application/json";
    // if (config.method === "post") {
    //   config.data = Qs.stringify(config.data);
    // }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 保存响应头返回的token
    if (response.headers.authorization) {
      sessionStorage.setItem("token", response.headers.authorization);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;
