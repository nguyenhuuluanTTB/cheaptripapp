const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: 'http://booking-service:3004',
  changeOrigin: true,
  pathRewrite: {
    '^/api/bookings': '/', // Đúng với route gateway đang mount
  },
});