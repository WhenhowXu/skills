public class Test1 {
    public static void main(String[] args) {
        String s = "Hello";
        System.out.println(s);
        s = s.toUpperCase();
        System.out.println(s);

        String s1 = "hello";
        String s2 = "hello";
        String s3 = "HELLO".toLowerCase();
        // Java编译器在编译期，会自动把所有相同的字符串当作一个对象放入常量池，自然s1和s2的引用就是相同的。所以，这种==比较返回true纯属巧合。换一种写法，==比较就会失败：
        System.out.println(s1 == s2); // true
        System.out.println(s1.equals(s2)); // true
        System.out.println(s1 == s3); // false
        System.out.println(s1.equals(s3)); // true

    }
}
