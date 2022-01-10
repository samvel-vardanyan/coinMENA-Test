// @ts-ignore
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app: any) => {
    app.use(
        createProxyMiddleware('/developers', {
            target: 'url',
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/repositories', {
            target: 'url',
            changeOrigin: true,
        })
    )
}