$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/hdSearch.feature");
formatter.feature({
  "name": "search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "search bar displays message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"What can we help you find today?\" should be diplayed in the search bar",
  "keyword": "Then "
});
formatter.match({
  "location": "HDSearchSteps.should_be_diplayed_in_the_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});