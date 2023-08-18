### 连接数据库

- `mysql -u root -p` 密码登录数据库

### database 操作

- `create database [databaseName]` 创建数据库
- `drop database [databaseName]` 删除数据库
- `use [databaseName]` 选择数据库
- `show databases` 显示所有数据库

### table 操作

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

### SQL 语句

- `AS`: 指定别名

```sql
SELECT user_id AS userId FROM test;
```

- `WHERE`
  - WHERE 子句的字符串比较是不区分大小写的， 用`BINARY`关键字来设定 WHERE 区分大小写的
  ```sql
      SELECT * FROM runoob WHERE runoob_title='javascript学习';
      SELECT * FROM runoob WHERE BINARY runoob_title='javascript学习';
  ```
- `UPDATE`
```sql
  UPDATE runoob SET runoob_title='学习Python' WHERE runoob_id=1;
```

- `LIKE`: 模糊匹配

  - `%` 表示任意 0 到多个字符
    - `%a`: 以 a 结尾的数据
    - `a%`: 以 a 开头的数据
    - `%a%`: 含 a 的数据
  - `_` 表示任意单个字符
    - `_a_`: 三位且中间为 a 的数据
    - `_a`: 两位且以 a 结尾的数据
    - `a_`: 两位且以 a 开头的数据
  - `[]`表示括号内所列字符中的一个，类似正则
  - `[^]`表示不在括号内所列字符中的一个

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
- `GROUP BY`: 分组查询

  - 使用`GROUP_CONCAT`函数是每个分组的字段值都显示出来

  ```sql
  BEGIN;
  CREATE TABLE IF NOT EXISTS test (
    id INT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    sex VARCHAR(20),
    PRIMARY KEY (id)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  INSERT INTO test (name, sex) VALUES
  ('小A', '男'),
  ('小B', '女'),
  ('小C', '男'),
  ('小D', '人妖'),
  ('小D', '男'),
  ('小D', NULL);

  SELECT * FROM test GROUP BY sex;
  SELECT * , GROUP_CONCAT(name) FROM test GROUP BY sex;
  COMMIT;


  +----+------+------+-------------------------+
  | id | name | sex  | GROUP_CONCAT(name)      |
  +----+------+------+-------------------------+
  |  6 | 小D  | NULL | 小D,小D                 |
  |  4 | 小D  | 人妖 | 小D,小D                 |
  |  2 | 小B  | 女   | 小B,小B                 |
  |  1 | 小A  | 男   | 小A,小C,小D,小A,小C,小D |
  +----+------+------+-------------------------+
  ```

  - 使用`HACING`过滤分组

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

### 实用技巧

- 创建时间、更新时间设置默认值

```sql
CREATE TABLE IF NOT EXISTS `menus` (
  `id` INT UNSIGNED AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

- `BETWEEN`:范围查询

```sql
BEGIN;
CREATE TABLE IF NOT EXISTS test_02(
  id INT UNSIGNED AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  age INT NOT NULL DEFAULT 10,
  create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO test_02
(name, age)
  VALUES
('小明', 10),
('小红', 24),
('小张', 13),
('老李', 57);

SELECT * FROM test_02 WHERE age BETWEEN 10 AND 20;
COMMIT;
// 查找年龄10到20岁的人，最终查询到了小明、小张
```

- `IS NULL`: 空值查询

```sql
SELECT * FROM test_02 WHERE create_time IS NULL;
```

- `IS NOT NULL`: 非空值查询
