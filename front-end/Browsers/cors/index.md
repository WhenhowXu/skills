### 同源策略

> `同源`：协议、域名、端口都一样才是同源。浏览器同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取数据

<b>不同源不可以</b>:

- 共享 Cookie、LocalStorage、IndexDB
- 获取 DOM
- 发送 Ajax 请求

### 跨域方案

- [jsonp](./jsonp/index.md)
- CORS(Cross-Origin Resource Sharing,跨源资源分享)
- [postMessage](./postMessage/index.md)
- 中间服务器代理 Nginx | NodeJS 中间件
