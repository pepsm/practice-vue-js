module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "https://api.publicapis.org",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
  proServer: {
    proxy: {
      "^/api": {
        target: "https://api.publicapis.org",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
