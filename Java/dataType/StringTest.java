public class StringTest {
    public static void main(String[] args){
        char c1 = 'A';
        int c2 = 'A'; 
        char c3  = '\u0041';

        String s1 = "";
        String s2 = "ABC";
        String s3 = "哈哈 ABC";

        System.out.println(c1); // A
        System.out.println(c2); // 65 字母“A”的Unicodde编码是65
        System.out.println(c3); // A

        System.out.println(s1); // 
        System.out.println(s2); // 
        System.out.println(s3); // 
    }
}
