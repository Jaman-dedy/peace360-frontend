const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'https://peace360.herokuapp.com',
      headers: {
        Connection: 'keep-alive'
      },
      changeOrigin: true
    })
  );
};
