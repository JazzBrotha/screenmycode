module.exports = {
  // ...
  devServer: {
    proxy: {
      // proxy all requests starting with /api to back end
      '/api': {
        target: 'http://localhost:3000/api/v1',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
