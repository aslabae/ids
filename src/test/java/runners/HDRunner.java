package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "rerun:target/rerun.txt"},
        features = "src/test/resource/features",
        glue = "steps",
        //tags = "@homedepotsmoke",
        tags = {"@search"}
       // ,dryRun = true
)

public class HDRunner {
}
