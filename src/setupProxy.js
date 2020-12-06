const { createProxyMiddleware } = require('http-proxy-middleware')

const withoutPrefix = ['oauth']

const dima = 'http://192.168.0.100:8083'

const backendUrl = dima

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: backendUrl,
      changeOrigin: true,
      secure: false,
      pathRewrite: (path) => {
        const needRemovePrefix = withoutPrefix.some((url) => path.includes(url))

        if (needRemovePrefix) {
          return path.replace('/api', '')
        }

        return path
      },
    }),
    createProxyMiddleware('/oauth', {
      target: backendUrl,
      changeOrigin: true,
      secure: false,
    })
  )
}
