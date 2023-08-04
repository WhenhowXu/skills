- **fs**

  - readFile
  - readFileSync
    > 文件读取
  - writeFile
  - writeFileSync
    > 文件写入，没有该文件会新建文件

```js
const fs = require("fs/promises");
const start = async () => {
  try {
    const data = await fs.readFile("./content/1.txt", { encoding: "utf-8" });
    await fs.writeFile("./content/2.txt", `MESSAGE FROM 1.txt: ${data}`, {
      encoding: "utf-8",
    });
    const data2 = await fs.readFile("./content/2.txt", { encoding: "utf-8" });
    console.log(data2);
  } catch (error) {
    console.error(error);
  }
};
start();
```

- readdir
- readdirSync 文件夹读取
- createReadStream

### **http**

- `createServer`创建服务

```js
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello World");
});
const port = 5000;
server.listen(port, () => {
  console.log(`服务启动成功，端口：${port}`);
});
```

- **os**
- **path**
  - join
  - basename
  - resolve
- **events**
- **`__dirname`**


### 库
- `jsonwebtoken`
