class Person {
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String name;
    public int age;
    public static int number;
}

public class StaticTest{
    public static void main(String[] args){
        Person m = new Person("K", 12);
        Person n = new Person("Y", 30);
        m.number = 100;
        System.out.println(m.number);
        System.out.println(n.number);
        n.number = 99;
        System.out.println(m.number);
        System.out.println(n.number);

        System.out.println(Person.number); 
    }
}

