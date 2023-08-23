## npm 常用指令

- `npm config list`: 查看npm配置信息
- `npm -v`: 查看 npm 版本

## 发包流程

```bash
# 登录npm
npm login
# 执行发布
npm pusblish
# 402-当使用npm publish发布带有scope作用域的包时，会出现402错误，需执行`npm publish --access=public`
# 403-检查npm源是否是http://registry.npmjs.org/
```

## nrm

**npm 源管理工具**

- 安装 nrm: `npm i -g nrm`
- 查看所有源: `nrm ls`
- 查看当前源: `nrm current`
- 切换源: `nrm use <registry>`
- 新增源: `nrm add <registry> <url>`
- 删除源: `nrm delete <registry>`
- 测试源的响应时间: `nrm test <registry>`
