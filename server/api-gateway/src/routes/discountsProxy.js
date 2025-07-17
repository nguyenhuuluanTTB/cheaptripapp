const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = createProxyMiddleware({
  target: 'http://discounts-service:3003',
  changeOrigin: true,
});