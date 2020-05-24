module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        // 共享sass 全局变量
        prependData: `@import "~@/styles/variables.scss";
         @import "~@/styles/onepx_mixin.scss"; 
         @import "@nutui/nutui/dist/styles/index.scss";
         @import "~@/styles/reset-nut.scss";
         @import "~@/styles/reset.scss";
         `
      }
    }
  },
  publicPath: ""
  // devServer: {
  //   proxy: {
  //     "/": {
  //       ws: false,
  //       target: "http://192.168.0.88:8100",
  //       changeOrigin: true
  //     }
  //   }
  // }
};
