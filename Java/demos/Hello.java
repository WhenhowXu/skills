import java.io.*;
import java.util.Properties;
public class Hello {
    public static void main(String[] args) throws FileNotFoundException, IOException {
        String f = "setting.properties";
        Properties props = new Properties();
        props.load(new java.io.FileInputStream(f));
        System.out.println(props.getProperty("last_open_file"));
    }
}

