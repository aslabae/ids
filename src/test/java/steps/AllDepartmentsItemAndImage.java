package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en_old.Ac;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.MyDriver;

import utils.MyDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class AllDepartmentsItemAndImage {

    WebDriver driver;
    Actions actions;

    {
        driver = MyDriver.getMyCurrentDriver();
        actions = new Actions(driver);
    }

    public AllDepartmentsItemAndImage(){
        driver.get("http://homedepot.com");
    }

    @Given("Home Depot web app is up")
    public void home_Depot_web_app_is_up() {
        Assert.assertTrue(driver.getTitle().contains("Home Depot"));
    }

    @When("user hovers over {string} menu")
    public void user_hovers_over_menu(String string) {
        WebElement allDeps = driver.findElement(By.xpath("//a[text()='All Departments']"));
        //WebDriverWait wait = new WebDriverWait(driver, 10);
        //wait.until(ExpectedConditions.visibilityOf(allDeps));
        actions.moveToElement(allDeps);
    }

    @Then("user sees {string} {int} in the dropdown list")
    public void user_sees_in_the_dropdown_list(String depItem, Integer depIndex) {

        String xPath = "(//div[@class='MainFlyout__level1Wrapper']/ul[@class='MainFlyout__list']/li/a)["
                + depIndex + "]";
        //driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        WebElement department = driver.findElement(By.xpath(xPath));

        Assert.assertEquals(depItem, department.getAttribute("title"));
    }

//    @When("user hovers over {string}")
//    public void user_hovers_over(String string) {
//        // Write code here that turns the phrase above into concrete actions
//        throw new cucumber.api.PendingException();
//    }
//
//    @Then("each image popup contains {string} in the image link")
//    public void each_image_popup_contains_in_the_image_link(String string) {
//        // Write code here that turns the phrase above into concrete actions
//        throw new cucumber.api.PendingException();
//    }


}