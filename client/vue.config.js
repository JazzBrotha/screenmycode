module.exports = {
  // ...
  devServer: {
    proxy: {
      // proxy all requests starting with /rest to back end
      '/rest': {
        target: 'http://127.0.0.1:8081/rest',
        changeOrigin: true,
        pathRewrite: {
          '^/rest': ''
        }
      }
    }
  }
};
