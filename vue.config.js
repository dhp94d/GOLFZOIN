const target = 'http://127.0.0.1:3000';

module.exports = {
  devServer: {
    overlay: false,
    port: 8080,
    proxy: {
      '/api': {
        target,
      },
    },
  },
};
