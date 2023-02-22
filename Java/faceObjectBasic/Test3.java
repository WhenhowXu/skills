/**
 * 在一个类中，我们可以定义多个方法。如果有一系列方法，它们的功能都是类似的，只有参数有所不同，那么，可以把这一组方法名做成同名方法。
 * 方法重载的目的是，功能类似的方法使用同一名字，更容易记住，因此，调用起来更简单
 * 
 * 如果一个父类不允许子类对它的某个方法进行覆写，可以把该方法标记为final。用final修饰的方法不能被Override
 */
public class Test3 {
    public static void main(String[] args) {
        Person p = new Person("Green", 24);
        p.introduce();
        p.sayHello();
        p.sayHello("小红");
    }
}

class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("我是" + this.name + "，今年我已经" + this.age + "岁了");
    }

    public void sayHello() {
        System.out.println("Hello, 我是" + this.name + "，很高兴认识你，我还不知道你的名字呢");
    }

    public void sayHello(String name) {
        System.out.println("Hello，" + name + "我是" + this.name + "很高兴认识你");
    }
}
