module.exports = {
  publicPath: './',
    devServer: {
      host: 'localhost',
      port: 9000,
      proxy: {
        '/api': {  // http://localhost:8081/api/banner
            target: 'http://localhost:9001',  // http://127.0.0.1:7001/banner
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
  }
}