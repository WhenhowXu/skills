### NodeJS

- 含义：解析器，即一个运行环境
- 用处：高性能 Web 服务器
- 优势：事件机制和异步 IO 模型

### 模块

- 模块化

  - `require`：引用模块
  - `exports`：导出模块

  ```js
  exports.count = 1;
  ```

  - `module` ：修改默认导出对象

  ```js
  module.exports = function () {
    console.log("new module");
  };
  ```

- 内置模块
  - fs
    - `stat`:
    - `chmod`:
    - `chown`:
    - `readFile`:
    - `readdir`:
    - `writeFile`:
    - `mkdir`:
    - `readFileSync`:
    - `writeFileSync`:
    - 小文件拷贝 [D](./demos/copy1.js)
    - 大文件拷贝 [D](./demos/copyBig.js)
  - path 路径相关操作
    - `normalize`: 转换为标准路径
    - `join`: 多个路径拼接为标准路径
    - `extname`: 获取扩展名
  - url
  - http
  - https 与`http`模块极为类似，区别在于`https`模块需要额外处理SSL证书

### 数据

- Buffer(数据块)
  - `Buffer`与字符串能够互相转化
  ```js
  const bin = new Buffer("hello", "utf-8");
  const str = bin.toString(); // 'hello'
  ```
  - `Buffer`像是可以做指针操作的 C 语言数组
  - `slice`
  - `copy`
- Stream(数据流)

### 常用库

- `jsonwebtoken`
- `Sequelize` ORM（Object Relational Mapping，对象关系映射）框架
- `mysql`
- `npm` 包管理工具
