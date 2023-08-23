### 类`class`

- 重载`Overload`： 一系列方法，它们的功能都是类似的，只有参数有所不同，那么，可以把这一组方法名做成同名方法

```js
class Person {
  private String name;
  public void setName(String name) {
      this.name = name;
  }
  public String getName() {
      return this.name;
  }
  public String getName(int age) {
      return this.name + age;
  }
}
```

- 继承：继承是面向对象编程中非常强大的一种机制，它首先可以复用代码， Java 通过`extends`关键字来实现继承
- 多态 多态是指，针对某个类型的方法调用，其真正执行的方法取决于运行时期实际类型的方法

```java
// 子类可以覆写父类的方法
```

- 抽象类`abstract`： 抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译会报错。因此，抽象方法实际上相当于定义了“规范”

- 接口`interface`: 就是比抽象类还要抽象的纯抽象接口，因为它连字段都不能有
  - 当一个具体的 class 去实现一个 interface 时，需要使用 implements 关键字
  - 一个类只能继承自另一个类，不能从多个类继承。但是，一个类可以实现多个 interface
  - interface 继承自 interface 使用 extends
- 方法名相同，方法参数相同，但方法返回值不同，也是不同的方法
- `static`: 静态字段、静态方法, 所有实例都会共享该字段和方法

- java 程序编译运行

```
javac Hello.java // 编译成.class 文件
java Hello.class  // .class可省略
```

- 内部类

```java
// Inner 即为内部类
class Outer {
    class Inner{
    }
}
```

### 变量

- 基本类型变量
  - 变量前加`final`修饰符，标识一个常量(不可修改)
  ```java
  public class Test {
      public static void main(Strings args[]){
          final int x = 100;
          x = 200; // 错误: 无法为最终变量x分配值
      }
  }
  ```
- 引用数据类型变量
  - 引用类型的变量类似于 C 语言的指针，它内部存储一个“地址”，指向某个对象在内存的位置
  - 省略变量类型，可以使用 var 关键字
  ```java
  String s = "hh";
  var s = "hh"
  ```
  - java 采用静态类型
  ```java
  String s = "123";
  s = 123; // 错误: 不兼容的类型: int无法转换为String
  ```

### 数据类型

- 基本类型
  - int 整型
  - float 浮点
  - boolean 布尔
  - char 字符
- 引用类型
  - String 字符串
    - 字符串可以用`"""..."""`表示多行字符串
    - `StringBuilder`: 能高效拼接字符串
    ```java
    // 在循环中，每次循环都会创建新的字符串对象，然后扔掉旧的字符串。这样，绝大部分字符串都是临时对象，不但浪费内存，还会影响GC效率
    StringBuilder sb = new StringBuilder(1024);
        for (int i = 0; i < 1000; i++) {
            sb.append(',');
            sb.append(i);
        }
    String s = sb.toString();
    ```
    - `StringJoiner`: 带分隔符高效拼接字符串
    - `String.join`
    ```java
    String[] names = {"Lily", "Lucy", "Tom"};
    String s = String.join(",", names); // Lily,Lucy,Tom
    ```
  - `[]` 数组
    - 数组是引用类型，在使用索引访问数组元素时，如果索引超出范围，运行时将报错
    - 数组遍历
    - 数组排序
    - 多维数组
  - 包装类: 例如`int` 对应的报装类为`java.lang.Integer`
  - 注意：
    - 引用类型可以赋值为 null，表示空，但基本类型不能赋值为 null
    - 引用类型比较，要使用 equals()方法，如果使用==比较，它比较的是两个引用类型的变量是否是同一个对象

### 运算

- 整数的除法对于除数为 0 时运行时将报错，但编译不会报错

```java
int x = 100 / 0;
// Exception in thread "main" java.lang.ArithmeticException: / by zero
```

- 浮点数常常无法精确表示, Java 浮点数完全遵循`IEEE-754`标准
- 比较两个浮点数是否相等常常会出现错误的结果。正确的比较方法是判断两个浮点数之差的绝对值是否小于一个很小的数
- 在一个复杂的四则运算中，两个整数的运算不会出现自动提升的情况

```java
double x = 1.3 + 21 / 5; // 5.3
```

### 流程控制

- 输出
  - `println`: 输出并换行
  - `print`: 输出不换行
  - `printf`: 格式化输出
    - `%d`：格式化输出整数
    - `%x`：格式化输出十六进制整数
    - `%f`：格式化输出浮点数
    - `%e`：格式化输出科学计数法
    - `%s`：格式化输出字符串
- 输入 `Java.util.Scanner`

```java
import java.util.Scanner;
public class Hello {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in); // 创建Scanner对象
      System.out.print("Input your name: "); // 打印提示
      String name = scanner.nextLine(); // 读取一行输入并获取字符串
      System.out.print("Input your age: "); // 打印提示
      int age = scanner.nextInt(); // 读取一行输入并获取整数
      System.out.printf("Hi, %s, you are %d\n", name, age); // 格式化输出
  }
}
```

- `if`
- `switch`
- `while`
- `do while`
- `for`
- `break continue`

### 未分类

- 包 `package`
  - 没有定义包名的 class，它使用的是默认包，非常容易引起名字冲突，因此，不推荐不写包名的做法
- 作用域
  - protected 作用于继承关系。定义为 protected 的字段和方法可以被子类访问，以及子类的子类
  - 定义为 private 的 field、method 无法被其他类访问：
- `classpath`: JVM 用到的一个环境变量，它用来指示 JVM 如何搜索 class

```
java -cp .;C:\work\project1\bin;C:\shared abc.xyz.Hello
```

- `JavaBean`

```java
// 读写方法符合以下这种命名规范的class被称为JavaBean
// 读方法:
public Type getXyz()
// 写方法:
public void setXyz(Type value)

// boolean字段比较特殊，它的读方法一般命名为isXyz()：
```

### 核心类

- `enmu`: 枚举类
  - 定义的 enum 类型总是继承自 java.lang.Enum，且无法被继承；
  - 只能定义出 enum 的实例，而无法通过 new 操作符创建 enum 的实例
  - 定义的每个实例都是引用类型的唯一实例

```java
enum Weekday {
    SUN, MON, TUE, WED, THU, FRI, SAT;
}
```

- `record`: 记录类 ,使用 record 关键字，可以一行写出一个不变类

```java
// 定义class时使用final，无法派生子类
// 每个字段使用final，保证创建实例后无法修改任何字段
```

- `BigInteger`: 用来表示任意大小的整数
- `BigDecimal`: 表示一个任意大小且精度完全准确的浮点数

### 异常处理

- 异常
  - `Throwable`是异常体系的根，它继承自 Object。`Throwable`有两个体系：`Error`和`Exception`
  - `Error`表示严重的错误，程序对此一般无能为力
  - `Exception`则是运行时的错误，它可以被捕获并处理
- 捕获异常
  - 凡是可能抛出异常的语句，都可以用`try ... catch`捕获
  - 多个 catch 语句只有一个能被执行
  - 存在多个 catch 的时候，catch 的顺序非常重要：子类必须写在前面
  - `finally`语句块保证有无错误都会执行
- 断言`assert`: 调试程序的方式
- 日志 日志包`java.util.logging`
  - 使用日志最大的好处是，它自动打印了时间、调用类、调用方法等很多有用的信息
  - 日志的输出可以设定级别

### 泛型

- 泛型就是定义一种模板

### 集合 `Collection`

- 定义：由若干个确定的元素所构成的整体
- java.util 包主要提供了以下三种类型的集合
  - `List`: 一种有序列表的集合
  - `Set`: 一种保证没有重复元素的集合
  - `Map`: 一种通过键值（key-value）查找的映射表集合
- `List`使用：

  - 创建

  ```java
    List<Integer> list = List.of(1,2,5);
  ```

  - 遍历

  ```java
  List<Integer> list = List.of(1, 2, 5);
  for (int i = 0; i < list.size(); i++) {
    int s = list.get(i);
    System.out.println(s);
  }
  ```

  - `boolean contains(Object o)`方法来判断 List 是否包含某个指定元素
  - `int indexOf(Object o)`: 返回某个元素的索引，不存在返回-1

- `Map`使用

  - 遍历
    - Map 存储的是 key-value 的映射关系，并且，它不保证顺序。在遍历的时候，遍历的顺序既不一定是 put()时放入的 key 的顺序，也不一定是 key 的排序顺序
    - 甚至对于不同的 JDK 版本，相同的代码遍历的输出顺序都是不同的

  ```java
    Map<String, Integer> map = new HashMap<>();
    map.put("apple", 10);
    map.put("watermalon", 100);
    map.put("pear", 92);
    for(String key: map.keySet()){
        Integer value = map.get(key);
        System.out.println(key+" = "+value);
    }

    // 同时遍历key和value可以使用for each循环遍历Map对象的entrySet()集合
    Map<String, Integer> map = new HashMap<>();
    map.put("apple", 10);
    map.put("watermalon", 100);
    map.put("pear", 92);
    for(Map.Entry<String, Integer> entry: map.entrySet()){
        String key = entry.getKey();
        Integer value = entry.getValue();
        System.out.println(key+" = "+value);
    }
  ```

- `HashMap`: 是一种通过对 key 计算 hashCode()，通过空间换时间的方式，直接定位到 value 所在的内部数组的索引，因此，查找效率非常高
- `EnumMap`: 作为 key 的对象是 enum 类型, 内部以一个非常紧凑的数组存储 value，并且根据 enum 类型的 key 直接定位到内部数组的索引
- `SortedMap`: 保证遍历时以 Key 的顺序来进行排序, 它的实现类是`TreeMap`

```java
// 作为SortedMap的Key必须实现Comparable接口，或者传入Comparator
import java.util.*;

public class Hello {
    public static void main(String[] args) {
        Map<Student, Integer> map = new TreeMap<>(new Comparator<Student>() {
            public int compare(Student p1, Student p2) {
                if (p1.score == p2.score) {
                    return 0;
                }
                return p1.score > p2.score ? -1 : 1;
            }
        });
        map.put(new Student("Lily", 86), 1);
        map.put(new Student("Tom", 10), 2);
        map.put(new Student("Test", 67), 3);
        for (Student key : map.keySet()) {
            System.out.println(key);
        }
        System.out.println(map.get(new Student("Tom", 10))); // 2
    }

}

class Student {
    public String name;
    public int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String toString() {
        return String.format("{%s: score=%d}", name, score);
    }
}
```

- `Set`
  - 实际上相当于只存储 key、不存储 value 的 Map。我们经常用 Set 用于去除重复元素
- `Queue`: 实现了一个先进先出（FIFO：First In First Out）的有序表
  - `Queue`只有两个操作：把元素添加到队列末尾, 从队列头部取出元素
  - 通过`add()/offer()`方法将元素添加到队尾
  - 通过`remove()/poll()`从队首获取元素并删除
  - 通过`element()/peek()`从队首获取元素但不删除
- `PriorityQueue`: 和`Queue`的区别在于，它的出队顺序与元素的优先级有关
  - 放入 PriorityQueue 的元素，必须实现 Comparable 接口，PriorityQueue 会根据元素的排序顺序决定出队的优先级
- `Deque`: 双端队列， 它的实现类有`ArrayDeque`和`LinkedList`
- `Stack`: 是一种后进先出（LIFO：Last In First Out）的数据结构
- `Properties`: Properties 内部本质上是一个 Hashtable，但我们只需要用到 Properties 自身关于读写配置的接口

### IO

- File 对象
- InputStream
- OutputStream

### 日期与时间

- 在计算机中，只需要存储一个整数表示某一时刻。当需要显示为某一地区的当地时间时，我们就把它格式化为一个字符串
- `Epoch Time`: 时间戳，时间戳的几种存储方式
  - 以秒为单位的整数
  - 以毫秒为单位的整数
  - 以秒为单位的浮点数
- `System.currentTimeMillis()`: Java 获取当前时间戳

```java
System.out.println(System.currentTimeMillis()); // 1692758260803
```

- 标准库

  - java.util
    - `Date`: 用于表示一个日期和时间的对象
    ```java
    // 它不能转换时区，除了toGMTString()可以按GMT+0:00输出外，Date总是以当前计算机系统的默认时区为基础进行输出
    Date d = new Date();
    System.out.println(d.toString()); // Wed Aug 23 10:43:35 CST 2023
    // toGMTString等方法已弃用
    ```
    - `Calendar`： 可以用于获取并设置年、月、日、时、分、秒，它和 Date 比，主要多了一个可以做简单的日期和时间运算的功能
    ```java
    Calendar c = Calendar.getInstance();
    c.clear();
    c.set(2012, 8, 2, 21, 22, 23);
    System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(c.getTime())); // 2012-09-02 21:22:23
    ```
    - `TimeZone`：提供了时区转的功能
    ```java
    TimeZone tzDefault = TimeZone.getDefault();
    TimeZone tzGMT9 = TimeZone.getTimeZone("GMT+09:00");
    TimeZone tzNY = TimeZone.getTimeZone("America/New_York");
    System.out.println(tzDefault.getID()); // Asia/Shanghai
    System.out.println(tzGMT9.getID());
    System.out.println(tzNY.getID());
    ```
  - java.time

    - `LocalDateTime | LocalDate | LocalTime`: 本地日期和时间

    ```java
    LocalDate d = LocalDate.now();
    LocalTime t = LocalTime.now();
    LocalDateTime dt = LocalDateTime.now();
    System.out.println(d); // 2023-08-23
    System.out.println(t); // 11:03:09.043023200
    System.out.println(dt); // 2023-08-23T11:03:09.043023200
    ```

    - `ZonedDateTime`：带时区的日期和时间

    ```java
    ZonedDateTime z0 = ZonedDateTime.now(ZoneId.of("Asia/Shanghai"));
    ZonedDateTime z1 = z0.withZoneSameInstant(ZoneId.of("America/New_York"));
    System.out.println(z0); // 2023-08-23T11:08:26.078708100+08:00[Asia/Shanghai]
    System.out.println(z1); // 2023-08-22T23:08:26.078708100-04:00[America/New_York]

    // 时区转换的时候，由于夏令时的存在，不同的日期转换的结果很可能是不同的
    ```

    - `ZoneId | ZoneOffset`：时区
    - `Duration`：时间间隔
    - `Instant`：时刻

### 测试

- 单元测试： 单个方法按照正确预期运行，如果修改了某个方法的代码，只需确保其对应的单元测试通过，即可认为改动正确
  - `JUnit`: Java 单元测试框架

### 加密与安全

- 编码算法
- 哈希算法
  - 哈希碰撞是指，两个不同的输入得到了相同的输出，碰撞是一定会出现的，因为输出的字节长度是固定的
  - 一个安全的哈希算法必须满足， 碰撞概率低， 不能猜测输出
  - 哈希算法的输出长度越长，就越难产生碰撞，也就越安全
  - 常用哈希算法：
    |算法|输出长度（位）|输出长度（字节）|
    |----|-------------|--------------|
    |MD5|128bits|16bytes|
    |SHA-1|160bits|20bytes|
    |RipeMD-160|160bits|20bytes|
    |SHA-256|256bits|32bytes|
    |SHA-512|512bits|64bytes|
- `Hmac`算法就是一种基于密钥的消息认证码算法，它的全称是 Hash-based Message Authentication Code，是一种更安全的消息摘要算法
  - Hmac 算法总是和某种哈希算法配合起来用的
- 对称加密算法: 传统的用一个密码进行加密和解密

### JDBC (Java DataBase Connectivity)

- Java 程序要通过`JDBC`接口来查询数据库, Java 程序访问数据库的标准接口
- 查询
- 更新
- 事务

```java
Connection conn = openConnection();
try {
    conn.setAutoCommit(false);
    // 执行多条SQL语句
    inset(); update(); delete();
    // 事务提交
    conn.commit();
} catch(SQLException e){
    // 事务回滚
    conn.rollback();
} finally {
    conn.setAutoCommit(true);
    conn.close();
}
```

- Batch: SQL 数据库对 SQL 语句相同，但只有参数不同的若干语句可以作为 batch 执行，即批量执行，这种操作有特别优化，速度远远快于循环执行每个 SQL

```java
try (PreparedStatement ps = conn.prepareStatement("INSERT INTO students (name, gender, grade, score) VALUES (?, ?, ?, ?)")) {
    for (Student s: students){
        ps.setString(1, s.name);
        ps.setBoolean(2, s.gender);
        ps.setString(3, s.grade);
        ps.setString(4, s.score);
        ps.addBatch();
    }
    int[] ns = ps.executeBatch();
    for(int n: ns){
        System.out.println(n + "inserted.");
    }
}
```

- `链接池 Connection Pool`: 创建线程是一个昂贵的操作，如果有大量的小任务需要执行，并且频繁地创建和销毁线程，实际上会消耗大量的系统资源，往往创建和消耗线程所耗费的时间比执行任务的时间还长，所以，为了提高效率，可以用线程池

```java
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/test");
config.setUsername("root");
config.setPassword("password");
config.addDataSourceProperty("connectionTimeout", "1000"); // 连接超时：1秒
config.addDataSourceProperty("idleTimeout", "60000"); // 空闲超时：60秒
config.addDataSourceProperty("maximumPoolSize", "10"); // 最大连接数：10
DataSource ds = new HikariDataSource(config);
```

### Maven

- `Maven`: Java 项目的管理和构建工具
- `Maven`使用`pom.xml`定义项目内容，并使用预设的目录结构
- Maven 使用 groupId，artifactId 和 version 唯一定位一个依赖。
- 构建
  - `clean`：清理
  - `compile`：编译
  - `test`：运行测试
  - `package`：打包

### 网络编程

- Websocket 长连接
