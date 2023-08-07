- 连接数据库

  - `mysql -u root -p` 密码登录数据库

- database 操作
  - `create database [databaseName]` 创建数据库
  - `drop database [databaseName]` 删除数据库
  - `use [databaseName]` 选择数据库
  - `show databases` 显示所有数据库
- table 操作

  - `create table [tableName] ([columnName, columnType])`:创建数据表

  ```sql
    CREATE TABLE IF NOT EXISTS `runoob_test`(
        `runoob_id` INT UNSIGNED AUTO_INCREMENT,
        `runoob_title` VARCHAR(100) NOT NULL,
        `runoob_author` VARCHAR(40) NOT NULL,
        `create_time` DATE,
        `submission_date` DATE,
        PRIMARY KEY(`runoob_id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
  ```

  - `drop table [tableName]`:删除数据表
  - `INSERT INTO [tableName] (field1, field2, ...fieldN) VALUES (value1,value2, ...valueN)`:插入数据

  ```sql
  // 插入单条数据
  INSERT INTO `runoob_test`
  (runoob_title, runoob_author, submission_date,create_time)
  VALUES
  ("学习 JavaScript", "Tom", NOW(), NOW());
  // 插入多条数据
  INSERT INTO `runoob_test`
  (runoob_title, runoob_author, submission_date,create_time)
  VALUES
  ("学习 Python", "Tom", NOW(), NOW()),
  ("学习 Java", "Lucy", NOW(), NOW()),
  ("学习 JavaScript", "LiMing", NOW(), NOW()),
  ("学习 C++", "XiaoHong", NOW(), NOW());
  ```

  - `DELETE FROM [tableName] [WHERE Clause]`:删除数据
    > 没有指定 WHERE 子句，MySQL 表中的所有记录将被删除
  - `SELECT column_name,column_name FORM table_name [WHERE Clause] [LIMIT N] [OFFSET M]`: 查询

  ```sql
    SELECT * FROM runoob;
  ```

- SQL 语句

  - WHERE
    > MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的
    ```sql
        SELECT * FROM runoob WHERE runoob_title='javascript学习';
        SELECT * FROM runoob WHERE BINARY runoob_title='javascript学习';
    ```
  - UPDATE

  ```sql
    UPDATE runoob SET runoob_title='学习Python' WHERE runoob_id=1;
  ```

  - LIKE

    ```sql
    SELECT * FROM runoob WHERE runoob_author LIKE '%om'; // 查找以om结尾的数据
    ```

- UNION 操作符

  > 用于将两个以上 SELECT 语句的结果组合到一个结果集合中

  ```sql
    SELECT runoob_title FROM runoob
    UNION
    SELECT runoob_title FROM runoob_test
    ORDER BY runoob_title;
  ```

- ORDER BY 排序
- GROUP BY 分组
- JOIN
  - INNER JOIN
  - LEFT JOIN
  - RIGHT JOIN
