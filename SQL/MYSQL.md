### 常用命令

- 修改密码：`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'`
- 登录数据库：`mysql -u root -p`
- 启动服务：`net start mysql`
- 停止服务：`net stop mysql`

### windows 安装 MYSQL

- [MYSQL 官网下载](https://www.mysql.com/)下载解压版
- 解压指定文件夹、添加环境变量
- 根目录下新建 [my.ini](./my.ini) 文件
- 管理员身份运行 cmd，在 bin 目录下执行`mysqld --initialize --console`，执行成功后会显示初始密码
- 执行`mysqld -install`，安装服务，然后就可以登录
