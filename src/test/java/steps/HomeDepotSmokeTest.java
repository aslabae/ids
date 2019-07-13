package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static io.github.bonigarcia.wdm.WebDriverManager.*;

public class HomeDepotSmokeTest {

    WebDriver driver;

    public HomeDepotSmokeTest() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

    @When("{string} is typed on the browser address bar")
    public void is_typed_on_the_browser_address_bar(String string) {
        driver.get(string);
        System.out.println("Title is "+driver.getTitle());
    }


    @Then("{string} should be there")
    public void should_be_there(String expectedTitle) {
        //String actualTitle = driver.getTitle();
        WebElement webtitle = driver.findElement(By.xpath("//a[@title='The Home Depot']"));
        String actualTitle = webtitle.getAttribute("title");
        Assert.assertEquals(expectedTitle, "");
    }


}
