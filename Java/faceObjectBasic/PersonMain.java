class Person {
    public String name;
    public int age;
}

public class PersonMain{
    public static void main(String[] args){
        Person p1 = new Person();
        System.out.println(p1.name);
        p1.name = "小红";
        p1.age = 30;
        System.out.println(p1.name);
    }
}

