import java.time.*;

public class Hello {
    public static void main(String[] args) {
        ZonedDateTime z0 = ZonedDateTime.now(ZoneId.of("Asia/Shanghai"));
        ZonedDateTime z1 = z0.withZoneSameInstant(ZoneId.of("America/New_York"));
        System.out.println(z0);
        System.out.println(z1);
    }
}
