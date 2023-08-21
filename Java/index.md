- 类`class`
- java 程序编译运行

```
javac Hello.java // 编译成.class 文件
java Hello.class  // .class可省略
```

- 变量
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
- 数据类型
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
- 运算
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
- 流程控制

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
