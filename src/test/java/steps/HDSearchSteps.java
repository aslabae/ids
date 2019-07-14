package steps;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import utils.MyDriver;

public class HDSearchSteps {

    static WebDriver driver;

    static {
        driver = MyDriver.getMyCurrentDriver();
    }

    @Then("{string} should be diplayed in the search bar")
    public void should_be_diplayed_in_the_search_bar(String searchBarMsg){
        WebElement searchLabel = driver.findElement(By.xpath("//label[@class='SearchBox__cover']"));

        String content = (
                (JavascriptExecutor)driver)
                .executeScript("return window.getComputedStyle(arguments[0], ':after')"
                                + ".getPropertyValue('content');",
                                searchLabel)
                .toString();

        Assert.assertEquals("\"" + searchBarMsg + "\"", content);
    }
}
