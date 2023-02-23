public class Test4 {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder(1024);
        for (int i = 0; i < 1000; i++) {
            sb.append(",");
            sb.append(i);
        }
        String s = sb.toString();
        System.out.println(s);
    }
}
