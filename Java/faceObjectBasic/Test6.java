/**
 * 如果父类的方法本身不需要实现任何功能，仅仅是为了定义方法签名，目的是让子类去覆写它，那么，可以把父类的方法声明为抽象方法：
 * 
 * 如果一个class定义了方法，但没有具体执行代码，这个方法就是抽象方法，抽象方法用abstract修饰。
 * 因为无法执行抽象方法，因此这个类也必须申明为抽象类（abstract class）。
 * 使用abstract修饰的类就是抽象类。我们无法实例化一个抽象类：
 */
abstract class Person{
    public abstract void run();
}
public class Test6 {
    public static void main(String[] args){
        Person p = new Person(); // ERROR 无法实例化抽象类
    }
}
interface PersonInter {
    void run();
    String setName();
}
