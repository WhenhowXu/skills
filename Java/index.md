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
  - `[]` 数组
    - 数组是引用类型，在使用索引访问数组元素时，如果索引超出范围，运行时将报错
    - 数组遍历
    - 数组排序
    - 多维数组

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
