public class DoWhileTest {
    public static void main(String[] args) {
        int sum = 0;
        int n = 1;
        do {
            sum = sum + n;
            n++;
        } while (n <= 100);
        System.out.println(sum);
        System.out.println(n);
    }
}
