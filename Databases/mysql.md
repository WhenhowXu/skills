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

  - `SHOW COLUMNS FROM [tableName]`: 展示表有哪些列

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
  > 使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列
- GROUP BY 分组
- JOIN
  - INNER JOIN
  - LEFT JOIN
  - RIGHT JOIN
- 事务

  > 事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。只有使用了 Innodb 数据库引擎的数据库或表才支持事务

  - BEGIN 开始一个事务
  - ROLLBACK 事务回滚
  - COMMIT 事务确认

  ```sql
    CREATE TABLE runoob_test(id int(5)) engine=innodb;

    // 确认流程
    BEGIN;
    INSERT INTO runoob_test value(5);
    COMMIT;
    // 回滚流程
     BEGIN;
    INSERT INTO runoob_test value(5);
    ROLLBACK;
  ```

- ALERT
  > 用于修改数据库、表和索引等对象的结构
