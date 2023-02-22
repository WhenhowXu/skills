public class Test4 {
    public static void main(String[] args) {
        Student s = new Student("小明", 10, 89);
        s.indroduce();
        s.getScore();
    }
}

class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void indroduce() {
        System.out.println("你好，我叫" + this.name + "，今年" + this.age + "岁了");
    }
}

class Student extends Person {

    Student(String name, int age, int score) {
        super(name, age);
        this.score = score;
        // TODO Auto-generated constructor stub
    }

    private int score;

    public int getScore() {
        return score;
    }
}