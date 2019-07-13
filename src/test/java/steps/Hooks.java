package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utils.MyDriver;

public class Hooks {

    @After
    public void after(Scenario currentScenario){
        if(currentScenario.isFailed() && MyDriver.getMyCurrentDriver() != null){
            TakesScreenshot screenshotTaker = (TakesScreenshot) MyDriver.getMyCurrentDriver();
            byte[] screenshot = screenshotTaker.getScreenshotAs(OutputType.BYTES);
            currentScenario.embed(screenshot, "image/png");
        }
    }
}
