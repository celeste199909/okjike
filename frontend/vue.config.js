module.exports = {
  publicPath: './',
    devServer: {
      host: 'localhost',
      port: 9000,
      proxy: {
        '/api': {  // http://localhost:8081/api/banner
            // 112.124.18.251
            target: 'http://112.124.18.251',  // http://127.0.0.1:7001/banner
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
  }
}