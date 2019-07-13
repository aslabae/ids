package utils;

import java.io.FileInputStream;
import java.util.Properties;

public class Props {

    private static Properties properties;

    static {

        try{
            FileInputStream file = new FileInputStream("props.properties");
            properties = new Properties();
            properties.load(file);
            file.close();
        }
        catch (Exception e){
            System.out.println("No path found for properties file");
        }
        finally {

        }
    }

    public static String getProperty(String key){
        return properties.getProperty(key);
    }
}
