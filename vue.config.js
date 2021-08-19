const target = 'http://127.0.0.1:8080';

module.exports = {
  devServer: {
    overlay: false,
    port: 8081,
    proxy: {
      '/api': {
        target,
        crossOrigin: true,
        logLevel: 'debug',
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
};
