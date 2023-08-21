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

public class Hello {
    public static void main(String[] args) {
        Person x = new Person();
        x.setName("xiao ming");
        System.out.println(x.getName());
        System.out.println(x.getName(10));
    }
}