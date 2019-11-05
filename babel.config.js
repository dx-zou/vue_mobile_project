module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ],
    [
      "@nutui/babel-plugin-separate-import",
      {
        libraryName: "@nutui/nutui",
        libraryDirectory: "dist/packages",
        style: "scss"
      }
    ]
  ]
};
