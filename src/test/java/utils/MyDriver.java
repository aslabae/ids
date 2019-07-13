package utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class MyDriver {

    public static WebDriver driver;
    private static String browserName;

    private MyDriver(){

    }

    public static WebDriver getMyCurrentDriver(){
        if(driver == null){
            return getMyDriver();
        }
        return driver;
    }

    public static WebDriver getMyDriver(){
        browserName = Props.getProperty("browser");
        if(browserName.equals("chrome")){
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }else if(browserName.equals("firefox")){
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        }else{
            System.out.println("Invalid browser request.");
        }

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        return driver;
    }
}
